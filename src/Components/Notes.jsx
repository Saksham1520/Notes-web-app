import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase";
import { limit, query } from "firebase/firestore";
import NoteCard from "./NoteCard";
import { CiSearch } from "react-icons/ci";

function Notes() {
  const firebase = useFirebase();
  const [allnotes, setAllnotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    firebase.getAllNotes().then((snapshot) => {
      const notes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllnotes(notes);
      setFilteredNotes(notes);
    });
  }, [firebase]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = allnotes.filter((note) =>
      note.title.toLowerCase().includes(query)
    );
    setFilteredNotes(filtered);
  };

  const handleDelete = (id) => {
    firebase.deleteNote(id).then(() => {
      setAllnotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      setFilteredNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== id)
      );
    });
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-center max-w-[50%] gap-2">
        <h1 className="font-bold text-lg">Search Here</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            deleteNote={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
