import Image from "next/image";
import React from "react";
import { IProduct } from "./interface";

const ProductCard: React.FC<IProduct> = ({
  UploadImage,
  CategoryName,
  Description,
}) => {
  const createMarkup = (content: string) => {
    return { __html: content };
  };
  
  return (
    <div className="bg-black/40 backdrop-blur-md inset-5 drop-shadow-md hover:drop-shadow-2xl rounded-lg p-4 group">
      <div className="relative w-full h-[200px] rounded-md overflow-hidden drop-shadow-lg ">
        <Image
          src={`https://assets.prestoenviro.com/category/${UploadImage}`}
          alt={CategoryName}
          fill={true}
          className="group-hover:scale-105 transition-all"
        />
      </div>
      <h2 className="text-xl font-bold text-white">{CategoryName}</h2>
      <p
        className="text-gray-300 line-clamp-4"
        dangerouslySetInnerHTML={createMarkup(Description)}
      />
    </div>
  );
};

export default ProductCard;
