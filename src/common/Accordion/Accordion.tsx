"use client"
import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface AccordionProps {
  title: string;
  content: string;
  target: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, target }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-3">
      <h6 className="mb-0">
        <button
          className="relative flex items-center w-full p-4 font-semibold text-left transition-all motion-safe:hover:transform-none duration-700 ease-in-out border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group hover:bg-gray-100"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={target}
        >
          <span>{title}</span>
          <span className="absolute right-4">
            {isOpen ? <CiCircleMinus size={25} /> : <CiCirclePlus size={25} />}
          </span>
        </button>
      </h6>
      <div
        id={target}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
