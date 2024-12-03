import React from "react";
import Logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#232F3E] text-white py-5">
      <nav className="flex items-center justify-between px-20 space-x-4">
        <img className="w-28" src={Logo} alt="Logo" />
        <ul className="flex flex-row space-x-8">
          <li>Home</li>
          <li>Cart</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
