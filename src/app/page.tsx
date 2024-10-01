"use client";
import ContainerAndTrucks from "@/components/ContainersAndTrucks/ContainerAndTrucks";
import NextButton from "@/components/Globals/NextButton";
import { TabsComponent } from "@/components/Globals/TabsComponent";
import ProductsComponent from "@/components/Products/ProductsComponent";
import StuffResults from "@/components/StuffingResult/StuffResults";
import useGlobalStore from "@/lib/zustand-store/useGlobalStore";

export default function Home() {
  const { SelectedTab } = useGlobalStore();

  return (
    <main className="min-h-dvh flex-col  bg-gray-100 flex justify-start py-10 items-center px-5 md:px-10">
      <h1 className="text-xl font-medium mb-3">Load Calculator</h1>
      <TabsComponent />
      {SelectedTab === "PRODUCTS" && <ProductsComponent />}
      {SelectedTab === "CONTAINERS AND TRUCKS" && <ContainerAndTrucks />}
      {SelectedTab === "STUFFING RESULT" && <StuffResults />}

      <NextButton />
    </main>
  );
}
