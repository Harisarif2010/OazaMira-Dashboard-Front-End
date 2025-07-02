"use client";
import React, { useState } from "react";
import Buttons from "../../../Componets/UI/Button/Buttons";
import ReusableTable from "../../../Componets/Table";
import TableModal from "../../../Componets/Modals/TableModal";
const data = [
  {
    orderId: "ORD10235",
    user: "Ana Kovic",
    type: "Candle Lightning",
    provider: "green Memorial",
    date: "01-01-2025",
    status: "Paid",
  },
  {
    orderId: "ORD10236",
    user: "Mark Miller",
    type: "Candle Lightning",
    provider: "green Memorial",
    date: "01-01-2025",
    status: "Pending",
  },
  {
    orderId: "ORD10237",
    user: "Emily Norolk",
    type: "Candle Lightning",
    provider: "green Memorial",
    date: "01-01-2025",
    status: "Paid",
  },
];

const Orders = () => {
  const columns = [
    { key: "orderId", label: "Order ID" },
    { key: "user", label: "User" },
    { key: "type", label: "Service Type" },
    { key: "provider", label: "Provider" },
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
      <ReusableTable heading="Support Tracking" columns={columns} data={data} />
      <TableModal
        isOpen={open}
        options={[
          "Full Conversation Log",
          "Internal Notes",
          "Assign / Reassign",
          "Change Status",
          "Trigger Feedback Survey",
        ]}
        onClose={closeModal}
      />
    </div>
  );
};

export default Orders;
