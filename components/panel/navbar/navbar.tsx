"use client";
import { useState } from "react";
import { NavbarHead } from "./navbar-head";
import { NavbarSide } from "./navbar-side";

interface NavbarWrapperI {}

export const Navbar = ({}: NavbarWrapperI) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const handleToggleNav = () => {
    setIsNavbarOpen((open) => !open);
  };
  return (
    <nav
      className={`fixed z-50 right-0 flex direction-row transition-translate duration-500 shadow-md
        ${isNavbarOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <NavbarHead handleToggleNav={handleToggleNav} />
      <NavbarSide />
    </nav>
  );
};
