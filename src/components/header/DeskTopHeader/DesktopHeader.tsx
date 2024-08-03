import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import logo from "../../../../public/logo.jpg";

import Image from 'next/image';
import MenuItems from '../MobileHeader/MenuList';
import { usePathname } from 'next/navigation';

const DesktopHeader: React.FC = () => {

    const pathname=usePathname()
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    // const isActive = (path: string) => router.pathname === path;
  
    if (!isClient) {
      return null;
    }

  return (
   <nav className="hidden md:flex space-x-8 font-medium bg-white border-gray-50  justify-around items-center p-4 shadow-md sticky top-0 z-50">
      <Link className="flex items-center" href="/">
        <Image
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
          
        />
        <span className="self-center text-2xl font-semibold ml-4">Logo</span>
      </Link>
      {
        MenuItems.map((item)=>(
          <ul>
            <li></li>
          </ul>
        ))
      }
      <div className="flex">
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="/product" className="" aria-current="page">
              Product
              
            </a>
          </li>
          <li>
            <a href="/contact" className="">
              Contact
            </a>
          </li>
          <li>
            <a href="/services" className="">
              Services
            </a>
          </li>
          <li>
            <a href="/blogs" className="">
              Blog
            </a>
          </li>
          <li>
            <a href="/category" className="">
            Category
            </a>
          </li>
          <li>
            <a href="/blogpost" className="">
            Blog Post
            </a>
          </li>
          <li>
            <a href="/productlist" className="">
            Products List
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopHeader;
