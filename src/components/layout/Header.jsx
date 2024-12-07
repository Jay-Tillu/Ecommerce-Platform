import React from "react";
import Logo from "@/assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#232F3E]  py-5">
      <nav className="flex items-center justify-between px-20 space-x-4">
        <Link to={"/"}>
          <img className="w-28" src={Logo} alt="Logo" />
        </Link>
        {/* <ul className="flex flex-row space-x-8">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul> */}
        <ul className="flex flex-row space-x-8">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-[#FACC15]" : "text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                `${isActive ? "text-[#FACC15]" : "text-white"}`
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "text-[#FACC15]" : "text-white"}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
