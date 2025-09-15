import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative top-0 left-0 w-full py-6 px-[9%] bg-[var(--bg-color)] flex items-center justify-between z-[100]">
      {/* Logo */}
      <Link className="text-4xl text-white font-bold" to="/home">
        Himanshi
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-2xl text-white font-medium ml-14 transition duration-500">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--main-color)] font-semibold"
              : "hover:text-[var(--main-color)]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--main-color)] font-semibold"
              : "hover:text-[var(--main-color)]"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--main-color)] font-semibold"
              : "hover:text-[var(--main-color)]"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--main-color)] font-semibold"
              : "hover:text-[var(--main-color)]"
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--main-color)] font-semibold"
              : "hover:text-[var(--main-color)]"
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--bg-color)] flex flex-col items-center py-6 space-y-4 text-xl text-white md:hidden transition duration-300">
          <Link
            className="hover:text-[var(--main-color)]"
            to="/home"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-[var(--main-color)]"
            to="/services"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            className="hover:text-[var(--main-color)]"
            to="/resume"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <Link
            className="hover:text-[var(--main-color)]"
            to="/portfolio"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-[var(--main-color)]"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
