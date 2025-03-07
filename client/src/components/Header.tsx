import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="flex justify-center space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 text-lg ${
              isActive ? "text-yellow-400 font-bold" : "text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 text-lg ${
              isActive ? "text-yellow-400 font-bold" : "text-white"
            }`
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
