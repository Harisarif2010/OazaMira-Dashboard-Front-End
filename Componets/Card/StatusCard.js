import React from "react";
import { ChevronDown } from "lucide-react";

const StatusCard = ({ title, options = [], dropdownLabel = "Level" }) => {
  return (
    <div className="bg-white rounded-[20px]  w-full max-w-[668px]">
      <div className="flex justify-between items-center border-b border-b-[#C3C3C3] pb-3 px-4">
        <h3 className="text-[22px] font-semibold text-black ">{title}</h3>
        <div className="relative py-2 ">
          <select className="appearance-none bg-white border border-[#BFBFBF] rounded-[20px] px-4 py-1 pr-8 text-sm outline-none cursor-pointer  md:w-45">
            <option>{dropdownLabel}</option>
          </select>
          <ChevronDown
            size={20}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-black"
          />
        </div>
      </div>

      <ul className="mt-4 space-y-4 p-4">
        {options.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center  space-x-3 text-[#292D32]">
              <span
                className={`w-8 h-8 rounded-full `}
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-base ">{item.label}</span>
            </div>
            {item.since && (
              <span className="text-xs ">Since: {item.since}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusCard;
