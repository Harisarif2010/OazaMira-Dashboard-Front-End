import React from "react";
import Buttons from "../../../Componets/UI/Button/Buttons";

const Invoice = () => {
  return (
    <div>
      <div className="w-full flex justify-end gap-x-3 py-4">
        <Buttons
          className="bg-[#FF5D41] rounded-[20px] flex justify-center items-center text-white text-[13px] h-8  w-21 cursor-pointer"
          text="Refund"
        />
        <Buttons
          className="bg-[var(--blue)] rounded-[20px] flex justify-center items-center text-white w-21 h-8 cursor-pointer "
          text="Export "
        />
      </div>
    </div>
  );
};

export default Invoice;
