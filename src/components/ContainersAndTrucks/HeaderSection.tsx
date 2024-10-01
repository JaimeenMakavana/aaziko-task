import React from "react";

const HeaderSection = ({
  setContainerToggle,
}: {
  setContainerToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-between items-center my-auto py-2 px-5 bg-white shadow-md ">
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setContainerToggle(true)}
        >
          + Add Container
        </button>
        <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md ml-2 cursor-not-allowed">
          + Add Truck
        </button>
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <label className="text-gray-600">Automatic Container Selection</label>
      </div>
    </div>
  );
};

export default HeaderSection;
