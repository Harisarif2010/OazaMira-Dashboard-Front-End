import React from "react";
import AccessControlTable from "../../../Componets/UI/Tables/Accesstable";
import Heading from "../../../Componets/Text/Heading";

const Notifications = () => {
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
      <AccessControlTable
        title="Access Control"
        permissions={["Grave Management", "Grave Export"]}
        data={rolesData}
      />
    </div>
  );
};

export default Notifications;
