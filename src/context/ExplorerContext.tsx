"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ExplorerContextType {
  isExplorerOpen: boolean;
  toggleExplorer: () => void;
}

const ExplorerContext = createContext<ExplorerContextType | undefined>(
  undefined
);

export function ExplorerProvider({ children }: { children: ReactNode }) {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  const toggleExplorer = () => {
    setIsExplorerOpen((prev) => !prev);
  };

  return (
    <ExplorerContext.Provider value={{ isExplorerOpen, toggleExplorer }}>
      {children}
    </ExplorerContext.Provider>
  );
}

export function useExplorer() {
  const context = useContext(ExplorerContext);
  if (context === undefined) {
    throw new Error("useExplorer must be used within a ExplorerProvider");
  }
  return context;
}
