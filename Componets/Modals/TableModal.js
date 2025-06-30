import React from "react";

const TableModal = ({ options }) => {
  return (
    <div className="bg-white border border-[var(--green)] text-[#656565] text-[13px] font-semibold p-4 rounded-md w-fit">
      {options?.map((option, index) => (
        <div key={index} className="py-1">
          {option}
        </div>
      ))}
    </div>
  );
};

export default TableModal;
