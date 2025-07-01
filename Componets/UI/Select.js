// components/PaymentStatusSelect.jsx

"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const statuses = ["Pending", "Paid", "Failed", "Refunded"];

export default function PaymentStatusSelect({
  value,
  onChange,
  placeholder = "Select status",
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (status) => {
    onChange(status);
    setOpen(false);
  };

  return (
    <div className="relative w-full w-max-[500px]" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full  px-4 py-2  h-11 border border-[#DDDDDD] rounded-[20px] bg-white flex items-center justify-between text-sm shadow-sm hover:border-gray-400 transition"
      >
        <span>{value || placeholder}</span>
        <ChevronDown className="w-7 h-8 text-[#7B7B7B]" />
      </button>

      {open && (
        <ul className="absolute z-50 mt-1 w-full bg-white border border-[#DDDDDD] rounded-md overflow-auto">
          {statuses.map((status) => (
            <li
              key={status}
              onClick={() => handleSelect(status)}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
