"use client";
import React, { useState } from "react";
import Buttons from "../../../Componets/UI/Button/Buttons";
import ReusableTable from "../../../Componets/Table";
import TableModal from "../../../Componets/Modals/TableModal";
const data = [
  {
    invoiceId: "ORD10235",
    user: "Ana Kovic",
    total: "€ 19.25",
    date: "01-01-2025",
    status: "Paid",
  },
  {
    invoiceId: "ORD10236",
    user: "Mark Miller",
    total: "€ 19.95",
    date: "01-01-2025",
    status: "Pending",
  },
  {
    invoiceId: "ORD10237",
    user: "Emily Norolk",
    total: "€ 18.95",
    date: "01-01-2025",
    status: "Paid",
  },
];

const Invoice = () => {
  const columns = [
    { key: "invoiceId", label: "Invoice ID" },
    { key: "user", label: "User" },
    { key: "total", label: "Total" },
    { key: "date", label: "Date" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Paid"
              ? "bg-[#16C09861] text-green-700 border border-[#6C8B48]"
              : "bg-[#FFC5C5] text-[var(--red)] border border-[var(--red)]"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Action",
      render: (_, row) => (
        <div className="flex gap-2 justify-around items-center">
          <button className="bg-[#0C6D95] text-white px-3 py-1 rounded-[20px] text-xs cursor-pointer">
            Edit
          </button>
          <button className="px-2 py-1 border bg-[var(--green)] rounded-[20px] h-4 w-8 flex justify-center items-center opacity-20">
            <span
              className="text-[var(--green)] text-sm  cursor-pointer"
              onClick={openModal}
            >
              ...
            </span>
          </button>
        </div>
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className="px-4">
      <ReusableTable heading="Payment Table" columns={columns} data={data} />
      <TableModal
        isOpen={open}
        options={["Invoice Preview", "Payment Status Tracker"]}
        onClose={closeModal}
      />
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
