import React from "react";

function StatusDisplay({ status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "done":
        return "bg-green-200 text-green-700";
      case "started":
        return "bg-yellow-200 text-yellow-700";
      case "not started":
        return "bg-red-200 text-red-700";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };
  return (
    <span
      className={`flex rounded-full px-2 items-center text-xs  font-semibold ${getStatusColor(
        status
      )}`}
    >
      {status}
    </span>
  );
}

export default StatusDisplay;
