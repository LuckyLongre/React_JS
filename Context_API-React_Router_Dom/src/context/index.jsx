import { createContext, use } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const name = "ShadowX";
  return (
    <AuthContext.Provider value={{ name }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return use(AuthContext);
};
