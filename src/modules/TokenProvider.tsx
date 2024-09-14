"use client";
import { createContext, useContext } from "react";

export const TokenContext = createContext({
  token: null as string | null,
});

export const TokenProvider = ({
  children,
  token: initialToken,
}: {
  children: React.ReactNode;
  token: string | null;
}) => {
  return (
    <TokenContext.Provider value={{ token: initialToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext).token;
};
