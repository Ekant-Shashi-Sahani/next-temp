import { CiCalendarDate, CiFacebook } from "react-icons/ci";
import Image from "next/image";
import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import { IBlog } from "../interface";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";

const BlogCard: React.FC<IBlog> = ({
  Image: img,
  Title,
  PostedDate,
  Author,
  BriefDescription,
  Slug,
}) => {
  const briefWords = BriefDescription.split(" ");
  const briefPreview =
    briefWords.length > 10
      ? briefWords.slice(0, 10).join(" ") + "..."
      : BriefDescription;

  return (
    <div className="container py-3">
      <div className="max-w-lg mx-auto  bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:duration-500 hover:scale-105">
        <div>
          <Link href={`blogs/${Slug}`}>
            <Image
              src={`https://assets.prestoenviro.com/blog/${img}`}
              alt="blog"
              className="rounded-t-lg  object-contain px-5 "
              width={500}
              height={500}
            />{" "}
          </Link>
        </div>
        <div className="grid grid-cols-2  px-3">
          {PostedDate ? (
            <Tooltip text="Publication Date" position="top">
              <div className="flex items-center py-4 space-x-2">
                <CiCalendarDate size={25} />
                <span>{PostedDate}</span>
              </div>
            </Tooltip>
          ) : (
            "12-0-2024"
          )}

          <Tooltip text="Share on Facebook" position="top">
            <div className="flex justify-end items-center py-4">
              <CiFacebook size={25} />
            </div>
          </Tooltip>
        </div>
        <div className="px-5">
          <div className="p-2 h-[170px]">
            <h2 className="text-xl text-red-600">{Author}</h2>
            <br />

            <h5 className="text-md text-slate-900">{Title}</h5>
            <p>{briefPreview}</p>
          </div>

          {briefWords.length > 10 && (
            <div
              className="bg-green-500 hover:bg-green-700 text-white mb-5 
       rounded-md px-2 py-1 mt-2  flex w-[150px] m-auto justify-around items-center"
            >
              <Link
                href={`blogs/${Slug}`}
                className="
                "
              >
                Read More
              </Link>
              <GrLinkNext />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
