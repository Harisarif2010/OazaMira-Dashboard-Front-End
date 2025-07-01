import React from "react";
import {
  CrossSellSuggestion,
  EngagementOverview,
  PurchaseInsights,
} from "../../../Componets/Card/InfoCard";

const Users = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 items-start">
      <EngagementOverview />
      <CrossSellSuggestion />
      <PurchaseInsights />
    </div>
  );
};

export default Users;
