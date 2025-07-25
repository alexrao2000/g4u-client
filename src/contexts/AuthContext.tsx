import { createContext, useContext, useState } from "react";

interface AuthContextType {
  accessToken: string
  setAccessToken: (val: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string>("");

  return (
    <AuthContext.Provider value={{accessToken, setAccessToken}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Error: useAuth must be used within an AuthProvider");
  }
  return context;
}