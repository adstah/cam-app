"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface NavbarContextI {
  isNavbarSideOpen: boolean;
  setIsNavbarSideOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavbarContext = createContext({} as NavbarContextI);

interface NavbarContextProviderI {
  children?: React.ReactNode;
}

const useNavbar = () => {
  const [isNavbarSideOpen, setIsNavbarSideOpen] = useState(false);
  return { isNavbarSideOpen, setIsNavbarSideOpen };
};

export const NavbarContextProvider = ({ children }: NavbarContextProviderI) => {
  return (
    <NavbarContext.Provider value={useNavbar()}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
