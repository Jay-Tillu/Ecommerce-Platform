import React from "react";

const ShimmerCard = () => {
  return (
    <div className="animate-pulse border border-[#CFCFCF] shadow-sm rounded-md pt-10 pb-5 px-5">
      <div className="bg-gray-300 h-56 w-full"></div>
      <div className="mt-7 bg-gray-300 h-6 w-3/4"></div>
      <div className="mt-4 bg-gray-300 h-4 w-1/2"></div>
      <div className="mt-4 flex flex-row items-center justify-between">
        <div>
          <div className="bg-gray-300 h-4 w-16"></div>
          <div className="bg-gray-300 h-6 w-20 mt-2"></div>
        </div>
        <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
