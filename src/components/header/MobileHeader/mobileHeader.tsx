"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md"; // Import the close icon
import MenuItems from "./MenuList";
import logo from '../../../../public/logo.jpg';
import Image from "next/image";

const MobileHeader: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="md:hidden bg-white max-h-14 border-gray-50 flex justify-between items-center p-4 shadow-md sticky top-0 z-50">
      <button
        onClick={toggleSidebar}
        className="text-lg transition-transform duration-300 ease-in-out"
        aria-label={sidebarOpen ? "Close menu" : "Open menu"}
      >
        {sidebarOpen ? (
          <MdClose className="text-xl" />
        ) : (
          <CiMenuBurger className="text-2xl" />
        )}
      </button>
      <Link href="/" className="flex items-center flex-col">
        <Image
          src={logo}
          alt="Logo"
          width={40}
          height={60}
          className="rounded-full"
        />
        <span className="text-md font-semibold ml-2">Next</span>
      </Link>
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-lg p-4 absolute top-0 right-0"
          aria-label="Close menu"
        >
          <MdClose className="text-xl" />
        </button>
        <ul className="flex flex-col p-4">
          {MenuItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center p-4 border-b hover:bg-gray-100"
            >
              {item.icon && <item.icon className="text-xl mr-2" />}
              <Link href={item.href} className="text-lg">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileHeader;
