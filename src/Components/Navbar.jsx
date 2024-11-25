import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firebase = useFirebase();
  const location = useLocation();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    firebase
      .logoutUser()
      .then(() => {
        alert("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout failed: ", error.message);
      });
  };

  const isActiveLink = (path) => location.pathname === path;
  return (
    <header className=" w-full">
      <nav className="h-[70px]  border-black  ">
        <div className=" flex mx-auto  md:my-2 md:mx-5  max-w-[1550px] justify-between items-center">
          <div className="text-xl font-bold">NotesApp</div>
          <div className="hidden md:flex md:justify-center md:items-center flex-grow">
            <div className="flex gap-8 font-semibold">
              <div>
                <Link
                  to="/"
                  className={`${
                    isActiveLink("/") ? "text-blue-500 font-bold" : "text-black"
                  }`}
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to="/notes"
                  className={`${
                    isActiveLink("/notes")
                      ? "text-blue-500 font-bold"
                      : "text-black"
                  }`}
                >
                  All Notes
                </Link>
              </div>
              <div>
                <Link
                  to="/createnotes"
                  className={`${
                    isActiveLink("/createnotes")
                      ? "text-blue-500 font-bold"
                      : "text-black"
                  }`}
                >
                  Create Notes
                </Link>
              </div>
            </div>
          </div>
          {firebase.isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded-lg px-4 py-2 bg-red-500 text-white hover:bg-green-600 duration-100"
            >
              <Link to="">Logout</Link>
            </button>
          ) : (
            <div className="hidden md:flex gap-4 font-semibold">
              <button className="rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-600 duration-100">
                <Link to="/login">Login</Link>
              </button>
              <button className="rounded-lg px-4 py-2 text-white bg-purple-500 hover:bg-purple-600 duration-100">
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          )}

          <div className="md:hidden text-2xl">
            <button onClick={handleMenu}>
              {isMenuOpen ? (
                <IoMdClose className=" text-[40px]" />
              ) : (
                <IoMenu className=" text-[40px]" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute right-0 top-[70px] w-2/4">
            <div className="flex flex-col items-end space-y-4 py-4 px-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActiveLink("/") ? "text-blue-500 font-bold" : "text-black"
                }`}
              >
                Home
              </Link>
              <Link
                to="/notes"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActiveLink("/notes")
                    ? "text-blue-500 font-bold"
                    : "text-black"
                }`}
              >
                All Notes
              </Link>
              <Link
                to="/createnotes"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActiveLink("/createnotes")
                    ? "text-blue-500 font-bold"
                    : "text-black"
                }`}
              >
                Create Notes
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
