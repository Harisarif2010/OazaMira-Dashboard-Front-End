import StatCard from "../../Componets/Card/StarCard";
import IncomeChart from "../../Componets/Chart/IncomeChart";
import OrdersChart from "../../Componets/Chart/OrderChart";
import OrderTable from "../../Componets/OrderTable";
import { DollarSign, FileText, ShoppingBag, Users } from "lucide-react";

export default function Home() {
  const stats = [
    {
      title: "Total Income",
      value: "$342.247",
      icon: <DollarSign className="text-green-600" />,
      trend: "up",
      percentage: "6.5%",
      note: "Since Last Week",
    },
    {
      title: "Per Day Income",
      value: "$12.145",
      icon: <FileText className="text-green-600" />,
      trend: "down",
      percentage: "2.4%",
      note: "Since Last Week",
    },
    {
      title: "Per Day Orders",
      value: "214.00",
      icon: <ShoppingBag className="text-green-600" />,
      trend: "up",
      percentage: "4.2%",
      note: "Since Last Week",
    },
    {
      title: "Customers",
      value: "2.14K",
      icon: <Users className="text-green-600" />,
      trend: "up",
      percentage: "5.5%",
      note: "Since Last Week",
    },
  ];

  const ordersData = [
    {
      id: "#1021",
      time: "11:00 AM",
      location: "Islamabad",
      status: "Delivered",
    },
    {
      id: "#1022",
      time: "12:15 PM",
      location: "Lahore",
      status: "On Delivery",
    },

    {
      id: "#1024",
      time: "3:30 PM",
      location: "Faisalabad",
      status: "Cancelled",
    },
  ];

  return (
    <div className="px-4">
      <div className="flex md:flex-row flex-col gap-4 my-2 items-center">
        {stats.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
      <div className="w-full flex justify-center my-2  ">
        <IncomeChart heading="Total Income" />
      </div>

      <div className="flex md:flex-row flex-col gap-x-3 gap-y-3 items-start">
        <div className="md:w-1/2 ">
          {" "}
          <OrdersChart heading="Number of Orders" />
        </div>
        <div className="md:w-1/2 ">
          {" "}
          <OrderTable orders={ordersData} />
        </div>
      </div>
    </div>
  );
}
