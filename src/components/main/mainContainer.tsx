import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Product from "../Product/Product";
import OurProducts from "../ourProduct/OurProducts";

const MainContainer = () => {
  return (
    <div>
      <Product />
      <OurProducts />
    </div>
  );
};

export default MainContainer;
