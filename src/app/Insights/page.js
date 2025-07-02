import React from "react";
import IncomeChart from "../../../Componets/Chart/IncomeChart";
import OrdersChart from "../../../Componets/Chart/OrderChart";
import EmotionalEngagementChart from "../../../Componets/Chart/EmotionalEngagementChart";
import RetentionChart from "../../../Componets/Chart/RetentionChart";
import BundlePerformanceChart from "../../../Componets/Chart/BundlePerformanceReport";
import FunnelChart from "../../../Componets/Chart/FunnelChart";

const Insights = () => {
  const funnelData = [
    { label: "Sessions", value: 750 },
    { label: "Add to cart", value: 650 },
    { label: "Checkout", value: 550 },
    { label: "Purchase", value: 450 },
  ];

  return (
    <div className="px-3">
      <div className="w-full flex md:flex-row flex-col  my-2 gap-x-3 ">
        <div className="md:w-2/3 w-auto">
          <IncomeChart heading="Active Users" />
        </div>
        <div className="w-1/3">
          <EmotionalEngagementChart />
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col my-2  gap-x-3 ">
        <div className="w-1/2">
          <OrdersChart heading="Subscription vs  One -Time" />
        </div>
        <div className="w-1/2">
          <RetentionChart />
        </div>
      </div>

      <BundlePerformanceChart />
    </div>
  );
};

export default Insights;
