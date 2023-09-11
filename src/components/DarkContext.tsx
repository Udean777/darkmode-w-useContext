import { createContext, useContext, useState } from "react";

interface DarkContextType {
  isDarkMode: boolean;
  toggleDarkmode: () => void;
}

const DarkContext = createContext<DarkContextType | undefined>(undefined);

export function useDarkMode(): DarkContextType {
  const context = useContext(DarkContext);

  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkmode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkContext.Provider value={{ isDarkMode, toggleDarkmode }}>
      {children}
    </DarkContext.Provider>
  );
};
