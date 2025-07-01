import React from "react";
export const EngagementOverview = () => {
  return (
    <div className="bg-white rounded-xl  p-5  w-full max-w-[407px]">
      <h3 className="text-[22px] font-semibold text-black mb-4">
        Engagement Overview
      </h3>
      <div className="flex  gap-x-3 mb-3">
        <div className="bg-[#F8FFEF] rounded-[20px] px-2">
          <p className="text-base text-black">Last Login</p>
          <div className=" px-2 py-1 text-sm text-[#6D6D6D]">June 12, 2025</div>
        </div>
        <div className="bg-[#F8FFEF] rounded-[20px] px-2">
          <p className="text-base text-black">App Usage Frequency</p>
          <div className=" px-2 py-1  text-sm text-[#6D6D6D]">Monthly</div>
        </div>
      </div>

      <div className="bg-[#F8FFEF] rounded-[20px] w-51 p-2">
        <p className="text-lg font-semibold text-black mb-1 px-1">
          Most Used Features
        </p>
        <ul className="list-disc pl-5text-base  space-y-1 px-2 text-[#6D6D6D]">
          <li>Memory wall</li>
          <li>Order Flowers</li>
        </ul>
      </div>
    </div>
  );
};
export const CrossSellSuggestion = () => {
  return (
    <div className="bg-white rounded-xl  p-5 w-full max-w-[407px]">
      <h3 className="text-[22px] font-semibold text-black mb-4">
        Cross-up sell suggestion
      </h3>
      <div className="mb-3 bg-[#F8FFEF] w-3/4 my-3 p-2 rounded-[20px]">
        <p className="text-lg text-black">Recommended Upgrades</p>
        <div className=" px-2 py-1 text-sm text-[#6D6D6D]">Premium package</div>
      </div>
      <div className="bg-[#F8FFEF] w-3/4 p-2 my-3 rounded-[20px]">
        <p className="text-base  text-black">Add on Service</p>
        <div className="px-2 py-1  text-sm text-[#6D6D6D]">Candle Delivery</div>
      </div>
    </div>
  );
};
export const PurchaseInsights = () => {
  return (
    <div className="bg-white rounded-xl  p-5 w-full max-w-sm">
      <h3 className="text-[22px] font-semibold text-black mb-4">
        Purchase Insights
      </h3>
      <div className="flex gap-x-2 justify-center">
        {" "}
        <div className="mb-3 bg-[#F8FFEF] w-1/2 rounded-[20px] ">
          <p className="text-base text-black">Order Type</p>
          <div className=" px-2 py-1  text-sm text-[#6D6D6D]">One - Time</div>
        </div>
        <div className="mb-3 bg-[#F8FFEF] w-1/2 rounded-[20px]">
          <p className="text-base text-black">Total Orders</p>
          <div className="bg-[#F8FFEF] px-2 py-1  text-sm text-[#6D6D6D]">
            08
          </div>
        </div>
      </div>

      <div className="mb-3 bg-[#F8FFEF] w-2/5 rounded-[20px]">
        <p className="text-base text-black">Total Cost</p>
        <div className="bg-[#F8FFEF] px-2 py-1 rounded text-sm text-[#6D6D6D]">
          €320
        </div>
      </div>
    </div>
  );
};
