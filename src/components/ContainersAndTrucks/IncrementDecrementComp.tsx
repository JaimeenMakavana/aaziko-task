import React from "react";

const IncrementDecrementComp = () => {
  return (
    <div className="flex items-start flex-col">
      <label className="mr-4 text-gray-500">Count</label>
      <div className="flex items-center space-x-2 border rounded-full">
        <button
          // onClick={decrement}
          className="bg-gray-200 text-gray-600 rounded-l-full p-1"
        >
          -
        </button>
        <span>1</span>
        <button
          // onClick={increment}
          className="bg-gray-200 text-gray-600 rounded-r-full p-1"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default IncrementDecrementComp;
