import React from "react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#232F3E] text-white py-5">
      <nav className="flex items-center justify-between px-20 space-x-4">
        <Link to={"/"}>
          <img className="w-28" src={Logo} alt="Logo" />
        </Link>
        <ul className="flex flex-row space-x-8">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
