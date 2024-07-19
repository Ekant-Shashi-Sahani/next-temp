import React from "react";
import ProductCard from "@/common/ProductCard";
import { IProduct } from "@/common/interface";



const getProducts = async () => {
  const res = await fetch(
    "https://api.prestoenviro.com/api/presto/v1/categories?Active=1"
  );
  if (!res.ok) return [];

  return res.json();
};

const OurProducts: React.FC = async () => {
  const products: Array<IProduct> = await getProducts();
  const sliceProduct=products.slice(0,3)

  return (
    <div className="m-4">
    <div className="m-4 flex justify-center">
    <h2 className=" flex text-center   text-2xl font-bold mb-4">Our Products</h2>
    </div>
    <div className="border-b-2 bg-black"></div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sliceProduct.map((p) => (
        <ProductCard key={p.CategoryName} {...p} />
      ))}
    </div>

  </div>
  );
};

export default OurProducts;
