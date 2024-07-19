import React from "react";
import Image from "next/image";
import dashboard from "../../../public/dashboard.jpg";

const Product = () => {
  return (
    <main className="flex-1 min-h-screen flex justify-center items-center">
      <div className="relative w-full h-96 md:h-screen">
        <Image
          src={dashboard}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Dashboard"
        />
      </div>
    </main>
  );
};

export default Product;
