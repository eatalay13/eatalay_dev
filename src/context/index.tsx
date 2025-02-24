"use client";

import { ReactNode } from "react";
import { ExplorerProvider } from "./ExplorerContext";
import { TabProvider } from "./TabContext";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <TabProvider>
      <ExplorerProvider>{children}</ExplorerProvider>
    </TabProvider>
  );
}
