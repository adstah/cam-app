"use client";
import { NavbarContextProvider } from "@/components/panel/navbar/navbar-context";
import { NavbarHead } from "@/components/panel/navbar/navbar-head";
import { NavbarSide } from "@/components/panel/navbar/navbar-side";

interface LayoutI {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutI) {
  return (
    <NavbarContextProvider>
      <NavbarHead />
      <NavbarSide />
      {children}
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        hbottmn
      </button>
    </NavbarContextProvider>
  );
}
