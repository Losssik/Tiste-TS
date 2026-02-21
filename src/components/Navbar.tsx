import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" py-2 flex justify-between items-center ">
      <Link to="/" className="font-bold text-xl">
        TISTE
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/conditions">Details</Link>
        <Link to="/rivers">Rivers</Link>
        <Link to="/favorites">Favorites</Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Mobile fullscreen menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-blue-950 flex flex-col justify-center items-center md:hidden">
          <Link
            to="/about"
            className="py-4 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/conditions"
            className="py-4 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Details
          </Link>
          <Link
            to="/rivers"
            className="py-4 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Rivers
          </Link>
          <Link
            to="/favorites"
            className="py-4 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Favorites
          </Link>
        </div>
      )}
    </nav>
  );
}
