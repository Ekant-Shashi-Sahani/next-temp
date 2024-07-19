 "use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.jpg";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-white border-gray-50 flex justify-around items-center p-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="self-center text-2xl font-semibold ml-4">Logo</span>
      </div>
      <div className="flex">
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="/product" className="" aria-current="page">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="">
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
