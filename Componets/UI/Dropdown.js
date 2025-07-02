"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Dropdown = ({ options = [] }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null); // holds selected option

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false); // close dropdown after selection
  };

  return (
    <div className="bg-white rounded-[20px] border border-[#BFBFBF] my-3 px-4 py-3 relative ">
      <div
        className="flex justify-between items-center gap-x-3 cursor-pointer w-full"
        onClick={handleClick}
      >
        <span className="text-black font-normal">
          {selected || "Select an option"}
        </span>
        <ChevronDown color="#000000" size={20} />
      </div>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-[10px] shadow z-10">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
