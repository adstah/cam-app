"use client";
import { createContext, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap

interface AppContextI {}

export const AppContext = createContext({} as AppContextI);

interface AppContextProviderI {
  children?: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderI) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
