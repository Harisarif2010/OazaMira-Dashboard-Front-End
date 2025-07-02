import React from "react";

const ReusableTable = ({ heading, columns, data }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 w-full overflow-x-auto"
      style={{
        boxShadow: " 0px 10px 60px 0px #E2ECF980",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="md:text-[22px]  text-lg font-semibold text-black">
          {heading}
        </h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1.5   text-sm bg-[#F9FBFF] rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <select className="px-3 py-1.5 rounded-md text-sm text-gray-600 bg-[#F9FBFF]">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <table className="w-full text-xs md:text-sm text-left ">
        <thead>
          <tr className="text-[#878984]">
            {columns.map((col) => (
              <th key={col.key} className="py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-t-[#EEEEEE] text-[10px] md:text-[13px] font-medium "
            >
              {columns.map((col) => (
                <td key={col.key} className="py-3">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Static Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-[#B5B7C0] font-medium">
        <p>Showing data 1 to {data.length} of 256K entries</p>
        <div className="flex gap-1">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                page === 1
                  ? "bg-[var(--green)] text-white"
                  : "bg-[#EEEEEE] hover:bg-gray-200 text-[#404B52]"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 rounded bg-gray-100">...</button>
          <button className="px-3 py-1 rounded bg-gray-100">40</button>
        </div>
      </div>
    </div>
  );
};

export default ReusableTable;
