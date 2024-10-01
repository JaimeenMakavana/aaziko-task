import React from "react";
import { CiBoxes } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { PiBagSimpleLight } from "react-icons/pi";

{
  /* <CiBoxes /> */
}
{
  /* <FaSackDollar /> */
}
{
  /* <PiBagSimpleLight /> */
}

const ProductTable = () => {
  // Array of product objects
  const products = [
    {
      type: <CiBoxes />,
      productName: "Boxes 1",
      length: 500,
      width: 400,
      height: 300,
      weight: "10 kg",
      quantity: 80,
      color: "bg-green-500",
      stack: "Yes",
    },
    {
      type: <FaSackDollar />,
      productName: "Sacks",
      length: 1000,
      width: 450,
      height: 300,
      weight: "45 kg",
      quantity: 100,
      color: "bg-purple-500",
      stack: "No",
    },
    {
      type: <PiBagSimpleLight />,
      productName: "Big bags",
      length: 1000,
      width: 1000,
      height: 1000,
      weight: "900 kg",
      quantity: 10,
      color: "bg-blue-500",
      stack: "Yes",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full overflow-x-auto scrollBar">
        <table className="table-auto text-left text-sm text-gray-600">
          {/* Table Header */}
          <thead>
            <tr className="*:whitespace-nowrap *:px-4 *:py-2">
              <th>Type</th>
              <th>Product Name</th>
              <th>Length (mm)</th>
              <th>Width/Radius (mm)</th>
              <th>Height (mm)</th>
              <th>Weight (kg)</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>Stack</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t *:px-4 *:py-2">
                <td className=" text-lg">
                  {/* <div className="w-5 h-5 bg-gray-200 rounded-full"></div> */}
                  {product.type}
                </td>
                <td className="">
                  <input
                    type="text"
                    value={product.productName}
                    className="border p-1 px-3 rounded-full w-full"
                    readOnly
                  />
                </td>
                <td className="">
                  <input
                    type="text"
                    value={product.length}
                    className="border p-1 rounded-full text-center"
                    readOnly
                  />
                </td>
                <td className="">
                  <input
                    type="text"
                    value={product.width}
                    className="border p-1 rounded-full text-center"
                    readOnly
                  />
                </td>
                <td className="">
                  <input
                    type="text"
                    value={product.height}
                    className="border p-1 rounded-full text-center"
                    readOnly
                  />
                </td>
                <td className="">
                  <input
                    type="text"
                    value={product.weight}
                    className="border p-1 rounded-full text-center"
                    readOnly
                  />
                </td>
                <td className="">
                  <input
                    type="text"
                    value={product.quantity}
                    className="border p-1 rounded-full text-center"
                    readOnly
                  />
                </td>
                <td className="">
                  <div
                    className={`w-5 h-5 rounded-full ${product.color}`}
                  ></div>
                </td>
                <td className=" text-center">{product.stack}</td>
                <td className="">
                  <div className="flex justify-center items-center space-x-2">
                    <button className="text-blue-500">
                      <IoMdSettings />
                    </button>
                    <button className="text-red-500">
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
