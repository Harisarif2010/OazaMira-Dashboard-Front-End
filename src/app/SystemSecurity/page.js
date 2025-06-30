import React from "react";
import StatusCard from "../../../Componets/Card/StatusCard";
import Heading from "../../../Componets/Text/Heading";
import AccessControlTable from "../../../Componets/UI/Tables/Accesstable";
import ErrorCard from "../../../Componets/Card/ErrorCard";

const System = () => {
  const statusData = [
    { label: "Run Time Expectations", color: "#6BA539" },
    {
      label: "Database Error",
      color: "#D4A700",
      since: "June 12",
    },
    { label: "Syntax", color: "#D0312D", since: "June 12" },
  ];
  const errorData = [
    { label: "Operational", color: "#6BA539", error: "Error" },
    {
      label: "Degraded Performance",
      color: "#D4A700",
      since: "June 12",
      error: "Error",
    },
    { label: "Down", color: "#D0312D", since: "June 12", error: "Error" },
  ];
  const rolesData = [
    {
      role: "Admin",
      grave_management: "Full",
      grave_export: "Full",
    },
    {
      role: "Manager",
      grave_management: "Full",
      grave_export: "None",
    },
  ];
  return (
    <div className="px-4">
      <Heading text="Notification & Communication" />{" "}
      <div className="grid md:grid-cols-2 gap-4">
        <ErrorCard dropdownLabel="Level" options={errorData} />
        <AccessControlTable
          title="Access Control"
          permissions={["Grave Management", "Grave Export"]}
          data={rolesData}
        />

        <StatusCard
          title="API Status"
          options={statusData}
          dropdownLabel="Level"
        />
      </div>
    </div>
  );
};

export default System;
