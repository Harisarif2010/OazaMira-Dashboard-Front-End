"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

const IncomeChart = ({ heading }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          35000, 54000, 50000, 70000, 30000, 60000, 32000, 50000, 65000, 40000,
          33000, 62000,
        ],
        fill: true,
        backgroundColor: "#6C8B4852", // light green fill
        borderColor: "#5F7D38", // line color
        tension: 0.4,
        pointBackgroundColor: "#000",
        pointBorderWidth: 1.5,
        pointRadius: (context) => (context.dataIndex === 8 ? 6 : 0), // emphasize Sept
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 80000,
        ticks: {
          stepSize: 20000, // tick interval: 20,000
          callback: (value) => `${value / 1000}K`, // label format: 20K, 40K, etc.
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="w-full  bg-white rounded-lg p-4 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{heading}</h2>
        <div className="flex gap-2">
          <button className="text-gray-400 text-sm px-3 py-1 rounded-full border">
            Weekly
          </button>
          <button className="text-gray-400 text-sm px-3 py-1 rounded-full border">
            Monthly
          </button>
          <button className="bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full">
            Yearly
          </button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default IncomeChart;
