import useGlobalStore from "@/lib/zustand-store/useGlobalStore";
import React from "react";

const NextButton = () => {
  const { SelectedTab, SetSelectedTab } = useGlobalStore();
  console.log("SelectedTab::: ", SelectedTab);

  return (
    <div className="mt-5 flex justify-center items-center gap-5">
      {/* Back Button */}
      {SelectedTab !== "PRODUCTS" && (
        <button
          className="text-blue-500 border px-5 py-2 rounded-lg  shadow-md"
          onClick={() => {
            if (SelectedTab === "PRODUCTS") {
              SetSelectedTab("CONTAINERS AND TRUCKS");
            }
          }}
        >
          Back
        </button>
      )}
      {/* Next Button */}
      <button
        className="bg-blue-500 px-5 py-2 rounded-lg text-white shadow-md"
        onClick={() => {
          if (SelectedTab === "PRODUCTS") {
            SetSelectedTab("CONTAINERS AND TRUCKS");
          }
          if (SelectedTab === "CONTAINERS AND TRUCKS") {
            SetSelectedTab("STUFFING RESULT");
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
