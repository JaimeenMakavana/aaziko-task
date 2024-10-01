"use client";
import { create } from "zustand";

const useGlobalStore = create((set) => ({
  SelectedTab: "PRODUCTS",
  SetSelectedTab: (tab) => set({ SelectedTab: tab }),
}));

export default useGlobalStore;
