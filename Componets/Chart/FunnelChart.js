// FunnelChart.jsx
export default function FunnelChart({ data }) {
  const colors = ["bg-sky-600", "bg-yellow-600", "bg-green-400", "bg-sky-400"];

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full max-w-sm">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">
        Checkout Abandonment Funnel
      </h2>
      <div className="flex flex-col items-center space-y-2">
        {data.map((step, index) => (
          <div
            key={step.label}
            className="w-full flex items-center justify-between"
          >
            <div
              className={`w-[150px] text-white text-center py-2 rounded ${colors[index]}`}
            >
              {step.label}
            </div>
            <span className="text-green-700 font-medium">{step.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
