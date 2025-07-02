"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const OrdersChart = ({ heading }) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Afternoon",
        data: [170, 140, 165, 150, 190, 165, 175],
        backgroundColor: "#5F7D38", // dark green
        borderRadius: 6,
        barThickness: 10,
      },
      {
        label: "Night",
        data: [140, 155, 150, 120, 125, 130, 160],
        backgroundColor: "#E2B400", // mustard yellow
        borderRadius: 6,
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
        ticks: {
          stepSize: 50,
        },
      },
    },
  };

  return (
    <div
      className="w-full  bg-white rounded-2xl p-4 "
      style={{
        boxShadow: " 6px 6px 54px 0px #0000000D",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{heading}</h2>
        <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
          Last Week
        </span>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default OrdersChart;
