import React from "react";
import AccessControlTable from "../../../Componets/UI/Tables/Accesstable";
import Heading from "../../../Componets/Text/Heading";
import Buttons from "../../../Componets/UI/Button/Buttons";

const rolesData = [
  {
    role: "Admin",
    grave_management: "Full",
    grave_export: "Full",
  },
  {
    role: "Manager",
    grave_management: "Full",
    grave_export: "None",
  },
];

const Compilance = () => {
  return (
    <div className="px-4">
      <Heading text="Notification & Communication" />{" "}
      <AccessControlTable
        title="Access Control"
        permissions={["Grave Management", "Grave Export"]}
        data={rolesData}
      />
      <div className="py-3">
        <div className="bg-white rounded-[20px] px-4 w-1/2 ">
          <h3 className="text-[22px] font-semibold text-#292D32 py-2">
            Data Export
          </h3>
          <span className="text-base font-medium text-#292D32 pb-7">
            Export or Personal data of user
          </span>
          <div className="w-full flex justify-end gap-x-3 py-4">
            <Buttons
              className="bg-[#1999ce] rounded-[20px] flex justify-center items-center text-white px-3 py-2 cursor-pointer"
              text="Export Data"
            />
            <Buttons
              className="bg-[var(--red)] rounded-[20px] flex justify-center items-center text-white  px-6 py-2 cursor-pointer"
              text="Delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compilance;
