import React from "react";
import GroupHeader from "./GroupHeader";
import AddProductPallet from "./AddProductPallet";
import ProductTable from "./ProductTable";

const ProductsComponent = () => {
  return (
    <div className="mt-5 max-w-full">
      <div className="w-full border shadow-md bg-white">
        {/* Group Header */}
        <GroupHeader />

        {/* Table */}
        <ProductTable />

        {/* Add product and pallet option */}
        <AddProductPallet />
      </div>
    </div>
  );
};

export default ProductsComponent;
