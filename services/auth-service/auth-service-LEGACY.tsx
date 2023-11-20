import { createContext, useContext } from "react";
import { AuthTO } from "./types";
import { ENDPOINTS } from "../config/urls";
import { HTTP } from "../config/conf";

interface AuthServiceContextI {
  logIn: (authTO: AuthTO) => Promise<Response>;
}

export const AuthServiceContext = createContext({} as AuthServiceContextI);

interface AuthServiceContextProviderI {
  children?: React.ReactNode;
}

const useAuth = () => {
  const { LOGIN, LOGOUT } = ENDPOINTS.USER.AUTH;
  const { POST, GET } = HTTP;

  const logIn: AuthServiceContextI["logIn"] = (authTO) => {
    return POST<AuthTO>(LOGIN, authTO);
  };

  return { logIn };
};

export const AuthServiceContextProvider = ({
  children,
}: AuthServiceContextProviderI) => {
  return (
    <AuthServiceContext.Provider value={useAuth()}>
      {children}
    </AuthServiceContext.Provider>
  );
};

export const useAuthServiceContext = () => useContext(AuthServiceContext);
