import React from "react";
import { TBreadCrumb } from "../comman";
import { BiChevronsRight, BiHome } from "react-icons/bi";
import Link from "next/link";

const BreadCrumb: React.FC<TBreadCrumb> = (props) => {
  const { pageTitle, pageDescription, links } = props;
  if (!pageTitle)
    return (
      <div className="bg-red-400 text-white">
        {links.map((l, i) => {
          let Icon = i ? BiChevronsRight : BiHome;
          return (
            <li key={l.url}>
              <Link
                href={l.url}
                className="flex items-center text-base text-secondary-main font-semibold "
              >
                <span className="mr-1">
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
      className="py-[20px] md:px-0 px-[20px] bg-violet-500 hover:bg-violet-600 active:bg-violet-700   
    focus:outline-none focus:ring focus:ring-violet-300  flex justify-end items-center gap-5 text-white"
    >
      <h1 className="text-2xl font-semibold text-secondary-main ">
        {pageTitle}
      </h1>
      <ul className="flex items-center gap-5">
        {links.map((l, i) => {
          let Icon = i ? BiChevronsRight : BiHome;
          return (
            <li key={l.url} className="">
              <Link
                href={l.url}
                className="flex items-center text-base text-secondary-main font-semibold "
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
