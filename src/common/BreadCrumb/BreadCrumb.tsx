import React from "react";
import { TBreadCrumb } from "../comman";
import { BiChevronsRight, BiHome } from "react-icons/bi";
import Link from "next/link";

const BreadCrumb: React.FC<TBreadCrumb> = (props) => {
  const { pageTitle, pageDescription,backgroundColor,textColor,iconColor, links } = props;
  if (!pageTitle)
    return (
      <div  className={`${backgroundColor} ${textColor}`}>
        {links.map((l, i) => {
          let Icon = i ? BiChevronsRight : BiHome;
          return (
            <li key={l.url}>
              <Link
                href={l.url}
                className="flex items-center text-base text-secondary-main font-semibold "
              >
                <span className={`mr-1 ${iconColor}`}>
                  <Icon />
                </span>
                {l.title}
              </Link>
            </li>
          );
        })}
      </div>
    );
  return (
    <div
      className={`py-[20px] md:px-0 px-[20px] ${backgroundColor} hover:${backgroundColor} active:${backgroundColor}  
    focus:outline-none focus:ring focus:ring-violet-300  flex  items-center gap-5 text-white`}
    >
      <h1 className={`text-xl font-semibold text-secondary-main text-left flex-1  pl-4 ${textColor}`}>
        {pageTitle}
      </h1>
      <ul className="flex items-center gap-5 ">
        {links.map((l, i) => {
          let Icon = i ? BiChevronsRight : BiHome;
          return (
            <li key={l.url} className="">
              <Link
                href={l.url}
                className={` ${backgroundColor} flex items-center text-base text-secondary-main font-semibold `}
              >
                <span className="mr-1 ">
                  <Icon size={30} />
                </span>{" "}
                {l.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumb;
