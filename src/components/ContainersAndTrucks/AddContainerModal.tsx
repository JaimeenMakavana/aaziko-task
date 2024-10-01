import React from "react";
import { GoContainer } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { ContainerCard } from "./ContainerCard";

const AddContainerModal = ({
  toggle,
  handleCancel,
  handleSelect,
}: {
  toggle: boolean;
  handleCancel: () => void;
  handleSelect: () => void;
}) => {
  return (
    <div
      style={{ zIndex: "999" }}
      className={`${
        !toggle && "hidden"
      } fixed inset-0 flex justify-center items-center`}
    >
      <div className="w-[90%] h-[90%] bg-white shadow-md p-5">
        <h1>Container & truck types</h1>
        <div className="flex justify-start items-center mt-3 *:px-3 border-b-2 w-fit">
          <div className="flex justify-start items-center gap-2">
            <GoContainer />
            <p>Container</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <CiDeliveryTruck />
            <p>Truck</p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mt-3">
          <ContainerCard />
          <ContainerCard />
          <ContainerCard />
          <ContainerCard />
          <ContainerCard />
          <ContainerCard />
        </div>

        <div className="mt-5 flex justify-center items-center gap-5">
          {/* Back Button */}
          <button
            onClick={handleCancel}
            className="text-blue-500 border px-5 py-2 rounded-lg  shadow-md"
          >
            Cancel
          </button>
          {/* Next Button */}
          <button
            onClick={handleSelect}
            className="bg-blue-500 px-5 py-2 rounded-lg text-white shadow-md"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContainerModal;
