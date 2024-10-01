import React from "react";
import TrashButtons from "../Globals/TrashButtons";

const GroupHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-black rounded-full"></div>
        <h2 className="text-lg font-medium">Group #1</h2>
      </div>
      <TrashButtons />
    </div>
  );
};

export default GroupHeader;
