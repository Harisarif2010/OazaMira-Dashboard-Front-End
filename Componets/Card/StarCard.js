import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const StatCard = ({ title, value, icon, trend, percentage, note }) => {
  const isPositive = trend === "up";

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-2 w-full max-w-[272px]"
      style={{
        boxShadow: "6px 6px 54px 0px #0000000D",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-base text-[#1E1E1E]">{title}</span>
        <div className="bg-[#6FD8661A] p-2 rounded-lg ">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold text-[#6B6B6B]">{value}</h3>
      <div className="flex items-center gap-1 text-sm">
        {isPositive ? (
          <ArrowUp className="text-[#00B69B] w-4 h-4" />
        ) : (
          <ArrowDown className="text-[#F33A3A] w-4 h-4" />
        )}
        <span className={`${isPositive ? "text-[#00B69B]" : "text-[#F33A3A]"}`}>
          {percentage}
        </span>
        <span className="text-gray-400">{note}</span>
      </div>
    </div>
  );
};

export default StatCard;
