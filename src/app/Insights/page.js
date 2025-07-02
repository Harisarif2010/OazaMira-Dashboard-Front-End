import React from "react";
import IncomeChart from "../../../Componets/Chart/IncomeChart";
import OrdersChart from "../../../Componets/Chart/OrderChart";
import RetentionChart from "../../../Componets/Chart/RetentionChart";

const Insights = () => {
  return (
    <div className="px-3">
      <div className="w-full flex justify-center my-2  ">
        <IncomeChart heading="Active Users" />
      </div>
      <div className="w-full flex  my-2  gap-x-3 ">
        <div className="w-1/2">
          <OrdersChart heading="Subscription vs  One -Time" />
        </div>
        <div className="w-1/2">
          <RetentionChart />
        </div>
      </div>
      <div className="bg-white rounded-[20px]"></div>
    </div>
  );
};

export default Insights;
