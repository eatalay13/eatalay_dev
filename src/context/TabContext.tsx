"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface Tab {
  id: string;
  title: string;
  path: string;
}

interface TabContextType {
  tabs: Tab[];
  activeTab: string;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

const initialTabs: Tab[] = [{ id: "home", title: "portfolio.tsx", path: "/" }];

export function TabProvider({ children }: { children: ReactNode }) {
  const [tabs, setTabs] = useState<Tab[]>(initialTabs);
  const [activeTab, setActiveTab] = useState("home");

  const addTab = (tab: Tab) => {
    if (!tabs.find((t) => t.id === tab.id)) {
      setTabs([...tabs, tab]);
    }
    setActiveTab(tab.id);
  };

  const removeTab = (id: string) => {
    if (tabs.length > 1) {
      const newTabs = tabs.filter((tab) => tab.id !== id);
      setTabs(newTabs);
      if (activeTab === id) {
        setActiveTab(newTabs[newTabs.length - 1].id);
      }
    }
  };

  return (
    <TabContext.Provider
      value={{ tabs, activeTab, addTab, removeTab, setActiveTab }}
    >
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
}
