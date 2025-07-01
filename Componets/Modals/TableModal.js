import React from "react";

const TableModal = ({ options, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="bg-white border border-[var(--green)] text-[#656565] text-[13px] font-semibold p-4 rounded-md w-fit  fixed right-10">
      {options?.map((option, index) => (
        <div key={index} className="py-1">
          {option}
        </div>
      ))}
    </div>
  );
};

export default TableModal;
