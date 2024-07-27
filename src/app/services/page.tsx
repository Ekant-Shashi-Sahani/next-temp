import React from "react";
import Accordion from "@/common/Accordion/Accordion";
import CustomImage from "@/common/CustomImage/CustomImage";
import BreadCrumb from "@/common/BreadCrumb/BreadCrumb";
import { yogaAns, yogameditation, shoulistart, guideline, FAQ } from "@/lib/http/store/String";
import yoga from "../../../public/yoga.jpeg";

const ServicesPage = () => {
  const accordionItems = [
    {
      title: "What is yoga?",
      content: yogaAns,
      target: "collapse-1",
    },
    {
      title: "Do I have to practice all of the principles of yoga to benefit from it?",
      content: yogameditation,
      target: "collapse-2",
    },
    {
      title: "I have never tried yoga before but want to do it now. Where should I start?",
      content: shoulistart,
      target: "collapse-3",
    },
    {
      title: "Are there any other helpful guidelines for yoga practice?",
      content: guideline,
      target: "collapse-4",
    },
  ];

  return (
    <>
      <BreadCrumb
        pageTitle="Services"
        links={[
          { url: "/", title: "Home" },
          { url: "/services", title: "Services" },
        ]}
      />
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1 flex flex-col items-end">
            <div className="w-full md:w-4/5 lg:w-3/5 text-right">
              <h1 className="text-3xl text-gray-400">FAQ</h1>
              <p className="py-5 font-light tracking-normal">{FAQ}</p>
              <div className="flex justify-end">
                <CustomImage src={yoga} alt="Yoga" className="object-contain" />
              </div>
            </div>
          </div>
          <div className="md:col-span-2 mt-10 gap-2">
            {accordionItems.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                target={item.target}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
