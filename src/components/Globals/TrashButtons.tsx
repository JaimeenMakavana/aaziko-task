import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

const TrashButtons = () => {
  return (
    <div className="flex justify-end items-center gap-3">
      <button className="text-red-500 ">
        <FaTrashAlt className="" />
      </button>
      <button className="text-white bg-blue-500 rounded-full">
        <IoMdArrowRoundUp />
      </button>
      <button className="text-white bg-blue-500 rounded-full">
        <IoMdArrowRoundDown />
      </button>
    </div>
  );
};

export default TrashButtons;
