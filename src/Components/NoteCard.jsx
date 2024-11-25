import React from "react";
import { useFirebase } from "../Context/Firebase";

function NoteCard({ id, title, content, deleteNote }) {
  const firebase = useFirebase();
  const handleDelete = () => {
    deleteNote(id); // Call the delete function with the note's ID
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white max-w-sm">
      <h2 className="text-xl font-semibold mb-2 break-words">{title}</h2>
      <p className="text-gray-700 break-words">{content}</p>
      <div className="flex justify-between ">
        <button className="border rounded-full p-2 mt-2 bg-yellow-600">
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="border rounded-full p-2 mt-2 bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
