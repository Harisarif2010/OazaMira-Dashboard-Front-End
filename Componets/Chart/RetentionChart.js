"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RetentionChart = () => {
  const data = {
    labels: ["Group A", "Group B"],
    datasets: [
      {
        label: "Reactivation",
        data: [30, 20], // bottom part
        backgroundColor: "#6D8A41", // greenish
        stack: "stack1",
        borderRadius: 4,
      },
      {
        label: "Retention",
        data: [30, 45], // top part
        backgroundColor: "#D1A800", // yellowish
        stack: "stack1",
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 8,
          padding: 12,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 60,
        ticks: {
          callback: (value) => `${value}%`,
          stepSize: 20,
        },
        grid: {
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-2xl p-4 shadow">
      <h2 className="text-sm font-medium mb-2">Retention & Reactivation</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RetentionChart;
