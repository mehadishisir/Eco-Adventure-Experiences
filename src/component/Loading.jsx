import React from "react";

const Loading = ({ label = "Loading, please wait..." }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-base-100/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <span className="loading loading-ring loading-lg text-green-600"></span>

        {/* Text */}
        <p className="text-gray-600 text-sm tracking-wide animate-pulse">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Loading;
