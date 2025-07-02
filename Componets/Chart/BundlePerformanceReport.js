// BundlePerformanceChart.jsx
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
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  annotationPlugin
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Region",
      data: [100000, 90000, 80000, 130000, 110000, 85000],
      borderColor: "#4B8A2E",
      backgroundColor: "#4B8A2E",
      tension: 0.4,
      fill: false,
      pointRadius: (ctx) => (ctx.dataIndex === 3 ? 8 : 0),
      pointBackgroundColor: "#4B8A2E",
    },
    {
      label: "User",
      data: [70000, 95000, 60000, 65000, 80000, 58000],
      borderColor: "#D4A418",
      backgroundColor: "#D4A418",
      tension: 0.4,
      fill: false,
      pointRadius: 0,
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
    tooltip: {
      mode: "index",
      intersect: false,
    },
    annotation: {
      annotations: {
        verticalLine: {
          type: "line",
          scaleID: "x",
          value: "Apr",
          borderColor: "#888",
          borderWidth: 1,
          borderDash: [4, 4],
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50000, // 50k steps
        callback: (value) => {
          if (value === 0) return "0";
          return `${value / 1000}k`;
        },
      },
    },
  },
};

export default function BundlePerformanceChart() {
  return (
    <div
      className="bg-white p-4 rounded-[20px] w-full max-w-xl"
      style={{
        boxShadow: "0px 2px 6px 0px #0D0A2C14",
      }}
    >
      <h2 className="text-sm font-semibold text-gray-800 mb-1">
        Bundle Performance Report
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}
