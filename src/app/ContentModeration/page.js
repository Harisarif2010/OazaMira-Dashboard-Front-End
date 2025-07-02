import React from "react";
import Heading from "../../../Componets/Text/Heading";

const ContentModeration = () => {
  return (
    <div className="px-4">
      <Heading text="Content Moderation" />{" "}
      <div className="bg-white rounded-[20px] shadow w-full max-w-[336px] mx-auto">
        <div className="p-4">
          <h2 className="text-[22px] text-black font-semibold py-1">
            Moderation Panel
          </h2>
          <span className="text-[13px] text-black font-semibold ">
            Incoming Content
          </span>
        </div>
        <div className="border-t border-[#E4E4E4] px-1 pb-6">
          <div className="flex justify-around  gap-x-4 my-4">
            <span className="text-[#1B1B1B] text-[13px] font-normal">
              Josip Petrovic
            </span>
            <div className="flex items-center gap-x-1 ">
              <button className="rounded-2xl text-[7px] font-normal text-[#C3C3C3] border border-[#C3C3C3] bg-white w-10 h-4">
                Add Note
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[var(--green)] w-10 h-4">
                Approve
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[#1999CE] w-10 h-4">
                Edit
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[#DF0404] w-10 h-4">
                Reject
              </button>
            </div>
          </div>
          <div className="flex justify-around  gap-x-4 my-4">
            <span className="text-[#1B1B1B] text-[13px] font-normal">
              Josip Petrovic
            </span>
            <div className="flex items-center gap-x-1 ">
              <button className="rounded-2xl text-[7px] font-normal text-[#C3C3C3] border border-[#C3C3C3] bg-white w-10 h-4">
                Add Note
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[var(--green)] w-10 h-4">
                Approve
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[#1999CE] w-10 h-4">
                Edit
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[#DF0404] w-10 h-4">
                Reject
              </button>
            </div>
          </div>
          <div className="flex justify-around  gap-x-4 my-4">
            <span className="text-[#1B1B1B] text-[13px] font-normal">
              Josip Petrovic
            </span>
            <div className="flex items-center gap-x-1 ">
              <button className="rounded-2xl text-[7px] font-normal text-[#C3C3C3] border border-[#C3C3C3] bg-white w-10 h-4">
                Add Note
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[var(--green)] w-10 h-4">
                Approve
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[#1999CE] w-10 h-4">
                Edit
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[#DF0404] w-10 h-4">
                Reject
              </button>
            </div>
          </div>
          <div className="flex justify-around  gap-x-4 my-4">
            <span className="text-[#1B1B1B] text-[13px] font-normal">
              Josip Petrovic
            </span>
            <div className="flex items-center gap-x-1 ">
              <button className="rounded-2xl text-[7px] font-normal text-[#C3C3C3] border border-[#C3C3C3] bg-white w-10 h-4">
                Add Note
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[var(--green)] w-10 h-4">
                Approve
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[#1999CE] w-10 h-4">
                Edit
              </button>
              <button className="rounded-2xl text-[7px] font-normal text-white bg-[#DF0404] w-10 h-4">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModeration;
