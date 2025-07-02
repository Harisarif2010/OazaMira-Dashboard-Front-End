// EmotionalEngagementChart.jsx
"use client";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const data = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Last Month",
      data: [6000, 1000, 7000, 5000],
      borderColor: "#88B04B",
      backgroundColor: "#88B04B",
      tension: 0.4,
      fill: false,
    },
    {
      label: "This Month",
      data: [6500, 2000, 3000, 9000],
      borderColor: "#D4A418",
      backgroundColor: "#D4A418",
      tension: 0.4,
      fill: false,
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
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 10000,
      ticks: {
        callback: (value) => `${value / 1000}k`,
      },
    },
  },
};

export default function EmotionalEngagementChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full max-w-md">
      <h2 className="text-sm font-medium text-gray-800 mb-1">
        Emotional Engagement
      </h2>
      <p className="text-xs text-gray-500 mb-3">past 30 days</p>
      <Line data={data} options={options} />
    </div>
  );
}
