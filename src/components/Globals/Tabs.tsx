"use client";
import useGlobalStore from "@/lib/zustand-store/useGlobalStore";

export const Tabs = ({
  icon,
  TabName,
  className,
}: {
  icon: React.ReactNode;
  TabName: string;
  className?: string;
}) => {
  const { SetSelectedTab, SelectedTab } = useGlobalStore((state) => state);

  const handleClickTab = () => {
    SetSelectedTab(TabName);
  };
  return (
    <div
      onClick={handleClickTab}
      className={`flex text-gray-500  cursor-pointer hover:scale-[1.02] duration-300 ease-in-out justify-center items-center gap-2 w-full
       relative  ${className}
        `}
    >
      <div
        className={` ${
          SelectedTab === TabName &&
          "absolute bottom-0 inset-x-0 h-[3px] bg-blue-500"
        }`}
      ></div>

      <div>{icon}</div>
      <p className="text-lg uppercase font-medium text-gray-500">{TabName}</p>
    </div>
  );
};
