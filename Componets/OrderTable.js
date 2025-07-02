import React from "react";

const OrderTable = ({ orders = [] }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "Delivered":
        return "text-[#00B69B] bg-[#00B69B]  ";
      case "On Delivery":
        return "text-[#0DC4FC] bg-[#0DC4FC]  ";
      case "cancelled":
        return "text-[var(--green)] bg-[var(--green)] ";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex justify-between items-center text-[#1E1E1E] mb-4 ">
        <h2 className="md:text-xl text-base font-semibold">Last Orders</h2>
        <span className="md:text-base font-medium text-[var(--green)] cursor-pointer text-sm">
          View All
        </span>
      </div>
      <table className="w-full">
        <thead className="font-semibold md:text-base text-sm text-[var(--green)] text-left border-b border-t-[var(--green)]">
          <tr>
            <th className="pb-2">Order ID</th>
            <th className="pb-2">O.Time</th>
            <th className="pb-2">Location</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody className="text-[#3C3C3C] md:text-sm  text-xs font-medium">
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="py-2">{order.id}</td>
              <td className="py-2">{order.time}</td>
              <td className="py-2">{order.location}</td>
              <td
                className={`py-2 md:h-7 md:w-23 h-2 w-10 text-center px-1 text-[10px] ${getStatusClass(
                  order.status
                )}`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
