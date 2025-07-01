"use client";
import React, { useState } from "react";
import PaymentStatusSelect from "../../../Componets/UI/Select";
import { Bell, Inbox, Mail } from "lucide-react";
import Buttons from "../../../Componets/UI/Button/Buttons";
import RatingBreakdown from "../../../Componets/RatingBreakdown";

const ServiceProvider = () => {
  const [status, setStatus] = useState("");
  return (
    <div className="w-full  px-4">
      <div className=" flex md:flex-row flex-col gap-x-3 gap-y-3">
        <div className="bg-white rounded-[20px] md:w-[35%] max-w-[648px]">
          <div className="px-3 py-6">
            {" "}
            <RatingBreakdown
              ratings={[
                { stars: 5, percent: 80 },
                { stars: 4, percent: 10 },
                { stars: 3, percent: 5 },
                { stars: 2, percent: 3 },
                { stars: 1, percent: 2 },
              ]}
              average={4.0}
              totalReviews={52}
            />
          </div>
        </div>
        <div className="bg-white rounded-[20px] md:w-[35%] max-w-[648px]">
          <div className="p-4 font-semibold">
            <span className="text-base text-[#1E1E1E]">Payouts & Finance</span>
            <h2 className="text-[#6B6B6B] text-2xl ">$12.145</h2>
          </div>
          <div className="px-3 border-t border-t-[#EEEEEE]   w-full pt-6 ">
            <span className="text-base text-[#1E1E1E] font-semibold px-2 ">
              Payouts Status
            </span>
            <div className="w-full flex gap-x-4 my-6">
              <div className="w-full">
                {" "}
                <PaymentStatusSelect value={status} onChange={setStatus} />
              </div>

              <Buttons
                className="text-white bg-[var(--sky-blue)] rounded-[20px] px-4 py-2  w-24 h-11"
                text="Override"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[20px] md:w-[28%]  ">
          <div className="px-5 py-4 text-black font-normal">
            Communication Records
          </div>
          <div className="border-t border-[#EEEEEE] px-1  text-base font-normal ">
            <div className=" flex justify-between px-4 my-3">
              <div className="flex items-center gap-x-2">
                <Inbox className="text-[#8C8C8C] w-4 h-4" />
                <span>Inbox</span>
              </div>
              <button className="rounded-[20px] h-5 w-12 text-white bg-[var(--sky-blue)] text-[11px] font-normal">
                {" "}
                Send{" "}
              </button>
            </div>
            <div className=" flex justify-between px-4 my-3 ">
              <div className="flex items-center gap-x-2">
                <Mail className="text-[#8C8C8C] w-4 h-4" />
                <span>Email</span>
              </div>
              <button className="rounded-[20px] h-5 w-12 text-white text-[11px] bg-[var(--sky-blue)] font-normal">
                Send
              </button>
            </div>
            <div className=" flex justify-between px-4  ">
              <div className="flex items-center gap-x-2">
                <Bell className="text-[#8C8C8C] w-4 h-4" />
                <span>Notifications</span>
              </div>
              <button className="rounded-[20px] h-5 w-12 text-white text-[11px] font-normal bg-[var(--tomato)]">
                Bounce
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
