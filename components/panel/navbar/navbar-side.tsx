"use client";
import { useNavbarContext } from "./navbar-context";

export const NavbarSide = () => {
  const { isNavbarSideOpen } = useNavbarContext();
  return isNavbarSideOpen && <div>AAA</div>;
};
