"use client";
import React from "react";
import AccessControlTable from "../../../Componets/UI/Tables/Accesstable";
import Heading from "../../../Componets/Text/Heading";
import Buttons from "../../../Componets/UI/Button/Buttons";
import Dropdown from "../../../Componets/UI/Dropdown";

const Notifications = () => {
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
  return (
    <div className="px-4">
      <Heading text="Notification & Communication" />{" "}
      <div className="flex md:flex-row gap-x-3 flex-col gap-y-3 md:my-4">
        <div className="bg-white rounded-[20px]  w-full  mx-auto">
          <div className="px-4 flex justify-between ">
            <h2 className="text-[22px] text-black font-semibold py-3">
              Admin Log
            </h2>
            <Dropdown options={["Role", "Sub Role"]} />
          </div>

          <div className="border-t border-[#C3C3C3]  px-3 pb-6">
            <table className="w-full ">
              <thead>
                <tr className="text-left text-[13px] text-[#878984]">
                  <th className="py-2 w-1/4">Date</th>
                  <th className="py-2 w-1/4">Admin</th>
                  <th className="py-2 w-1/4">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-[#292D32] text-[13px] font-medium ">
                  <td className="py-2">12 Jun, 2025</td>
                  <td className="py-2">Joseph</td>
                  <td className="py-2">
                    <div className="flex gap-x-3">
                      <Buttons
                        className="bg-[#1999ce] rounded-[20px] flex justify-center items-center text-white px-3 py-2 cursor-pointer"
                        text="Export "
                      />
                      <Buttons
                        className="bg-[var(--red)] rounded-[20px] flex justify-center items-center text-white px-6 py-2 cursor-pointer"
                        text="Delete"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <AccessControlTable
          title="Access Control"
          permissions={["Grave Management", "Grave Export"]}
          data={rolesData}
        />
      </div>
      <div className="bg-white rounded-[20px] w-1/2 px-4 py-2 my-2">
        <h2 className="text-black text-[22px] font-semibold">Data Export</h2>
        <span className="text-[#292D32] text-base font-medium">
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
  );
};

export default Notifications;
