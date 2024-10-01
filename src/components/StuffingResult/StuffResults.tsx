import React from "react";
import { ContainerCard } from "../ContainersAndTrucks/ContainerCard";
import { CustomTable } from "./CustomTable";
import { TableStuffData } from "@/statics/CustomStuffData";
import { Container3D } from "./Container3D";

// 3D Container Component with Orbit Controls

// Main Component combining 3D view and Table
const StuffResults = () => {
  return (
    <div className="w-full">
      <div className="my-3">
        <ContainerCard />
      </div>

      <div className="bg-white w-full">
        {/* 3D model */}
        <Container3D tableData={TableStuffData} />
        {/* ---data---*/}
        <CustomTable />
      </div>
    </div>
  );
};

export default StuffResults;
