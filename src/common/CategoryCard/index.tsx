import React from "react";
import { ICategoryProps } from "@/common/interface";
import { getImageUrl } from "@/lib/http/store/utils";
import { GrNext } from "react-icons/gr";
import Link from "next/link";
import CustomImage from "../CustomImage/CustomImage";

const CategoryCard: React.FC<ICategoryProps> = ({
  Slug,
  CategoryName,
  BriefDescription,
  UploadImage,
}) => {
  return (
    <Link href={`/category/${Slug}`} className="grid grid-cols-2 px-5 py-5 ">
    <div className="col-span-2 ">
    <div className="overflow-hidden bg-gray-light p-2 rounded-md h-[140px] w-auto relative">
        <CustomImage
          src={getImageUrl(UploadImage, "category") || ""}
          alt={CategoryName || "Category"}
          fill={true}
          className="object-contain rounded-md"
        />
      </div>
      <div className="py-5 px-2 shadow-md rounded-md   mt-5">
        <div className="flex flex-col">
          <h4 className="text-2xl dark:md:hover:bg-fuchsia-600 ">
            {CategoryName || ""}
          </h4>
          <p>
            {BriefDescription ||
              "Thermal Shock Test System is a specialized chamber which is used to assess the resilience of materials/ components/ products under extreme temperature changes."}
          </p>
          <div className="flex justify-center mt-10">
            <button
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 rounded-lg py-3 px-2 
           focus:outline-none focus:ring focus:ring-violet-300 text-white flex items-center"
            >
              Read More
              <GrNext className="self-center ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CategoryCard;
