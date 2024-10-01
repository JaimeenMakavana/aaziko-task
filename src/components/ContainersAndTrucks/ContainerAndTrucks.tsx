import React, { useState } from "react";
import TrashButtons from "../Globals/TrashButtons";
import Image from "next/image";
import Container from "@/statics/20st.svg";
import AddContainerModal from "./AddContainerModal";
import { ValueComponent } from "./ValueComponent";
import IncrementDecrementComp from "./IncrementDecrementComp";
import HeaderSection from "./HeaderSection";

const ContainerAndTrucks = () => {
  const [ContainerToggle, setContainerToggle] = useState(false);
  return (
    <div className=" mt-5 w-full">
      <AddContainerModal
        toggle={ContainerToggle}
        handleCancel={() => setContainerToggle(false)}
        handleSelect={() => {
          setContainerToggle(false);
        }}
      />
      {/* Header Section */}
      <HeaderSection setContainerToggle={setContainerToggle} />

      {/* Container Details */}
      <div className="p-4 mt-3 bg-white shadow-md  border border-gray-200 ">
        <div className="flex justify-between items-center mb-4 border-b-2 pb-2">
          <div className="flex items-center space-x-4">
            <select className="border p-2 rounded-full px-3 bg-white text-sm">
              <option>20 STANDARD</option>
              <option>40 STANDARD</option>
              <option>40 HIGH CUBE</option>
            </select>
          </div>
          <TrashButtons />
        </div>

        <div className="grid grid-cols-[170px_1fr]">
          <div className="size-[150px] relative ">
            <Image
              src={Container}
              alt=""
              className="object-contain object-center"
              width={400}
              height={400}
            />
          </div>
          <div>
            <div className="grid grid-cols-5 gap-4 items-center">
              <IncrementDecrementComp />
              <ValueComponent label="Length" value="5895" />
              <ValueComponent label="Width" value="2350" />
              <ValueComponent label="Height" value="2392" />
              <ValueComponent label="Max Weight" value="28230" />
            </div>
            <div className="flex  items-start mt-4 flex-col">
              <label className="mr-2 text-gray-500">Loading rules</label>
              <div className="flex justify-start items-center gap-3">
                <select className="border p-2 rounded-md">
                  <option>Auto</option>
                  <option>Manual</option>
                </select>
                <div className="ml-4">
                  <input type="checkbox" className="mr-2" />
                  <label>Load only specific groups</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerAndTrucks;
