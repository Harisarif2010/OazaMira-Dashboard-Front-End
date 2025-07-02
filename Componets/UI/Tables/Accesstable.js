import React from "react";

const AccessControlTable = ({ title, data, permissions }) => {
  return (
    <div className="bg-white rounded-[20px] shadow w-full max-w-2xl mx-auto">
      <div className="px-2">
        <h2 className="text-[22px] text-black font-semibold py-3">{title}</h2>
      </div>
      <div className="border-t border-[#C3C3C3] px-6 pb-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-[13px] text-[#878984] py-3">
              <th className="py-2">Role</th>
              {permissions.map((perm) => (
                <th key={perm} className="py-2">
                  {perm}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((roleEntry, idx) => (
              <tr
                key={idx}
                className="text-[#292D32] text-[13px] font-medium py-2"
              >
                <td className="py-2">{roleEntry.role}</td>
                {permissions.map((perm) => (
                  <td key={perm} className="py-2">
                    {roleEntry[perm.toLowerCase().replace(/ /g, "_")]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessControlTable;
