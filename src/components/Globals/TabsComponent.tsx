import { Tabs } from "./Tabs";
import { AiFillProduct } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { PiShippingContainerFill } from "react-icons/pi";

export const TabsComponent = () => {
  return (
    <div className="flex justify-between border items-center  bg-white w-full shadow-md divide-x *:p-2">
      <Tabs icon={<AiFillProduct />} TabName="PRODUCTS" />
      <Tabs
        icon={<PiShippingContainerFill />}
        TabName="CONTAINERS AND TRUCKS"
      />
      <Tabs icon={<FaRegShareSquare />} TabName="STUFFING RESULT" />
      <div>
        <IoIosSettings />
      </div>
    </div>
  );
};
