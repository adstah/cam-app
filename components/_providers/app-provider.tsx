"use client";
import { createContext, useContext } from "react";

interface AppContextI {}

export const AppContext = createContext({} as AppContextI);

interface AppContextProviderI {
  children?: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderI) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
