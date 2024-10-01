import React from "react";

const AddProductPallet = () => {
  return (
    <div className="p-4 flex items-center space-x-4 border-t">
      <button className="bg-blue-500 text-white py-1 px-3 rounded-md">
        + Add product
      </button>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="usePallets" />
        <label htmlFor="usePallets" className="text-gray-600">
          Use pallets
        </label>
      </div>
    </div>
  );
};

export default AddProductPallet;
