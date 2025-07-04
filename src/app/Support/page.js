"use client";
import React, { useState } from "react";
import Buttons from "../../../Componets/UI/Button/Buttons";
import ReusableTable from "../../../Componets/Table";
import TableModal from "../../../Componets/Modals/TableModal";
const data = [
  {
    ticketId: "ORD10235",
    user: "Ana Kovic",
    topic: "Order Issue",
    date: "01-01-2025",
    status: "Paid",
  },
  {
    ticketId: "ORD10236",
    user: "Mark Miller",
    topic: "Grave Photo",
    date: "01-01-2025",
    status: "Pending",
  },
  {
    ticketId: "ORD10237",
    user: "Emily Norolk",
    topic: "Order Issue",
    date: "01-01-2025",
    status: "Paid",
  },
];

const Support = () => {
  const columns = [
    { key: "ticketId", label: "Ticket ID" },
    { key: "user", label: "User" },
    { key: "topic", label: "Topic" },
    { key: "date", label: "Submitted Date" },
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
      <div className="w-full flex justify-end gap-x-3 py-4">
        <Buttons
          className="bg-[var(--green)] rounded-[20px] flex justify-center items-center text-white text-[13px] px-2 cursor-pointer py-1"
          text="New Ticket"
        />
      </div>
    </div>
  );
};

export default Support;
