import React from "react";
import { CiLink } from "react-icons/ci";

const RelatedBlogs: React.FC = () => {
  return (
    <div className="flex flex-col shadow-lg rounded-md h-[300px] border border-gray-200">
      <div className="flex flex-col items-center p-4 border-b border-gray-300">
        <span className="text-lg font-semibold">Related Blogs</span>
        <span className="block w-20 h-1 bg-gray-400 mt-2"></span>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex items-center gap-2 mb-4 "> 
          <CiLink size={34} className="rounded-2xl shadow-md" />
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div className="border-t border-gray-300 mt-auto pt-2">
          <span className="text-sm text-gray-500">
            Explore more related content below.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
