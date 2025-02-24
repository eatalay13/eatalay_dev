import React from "react";
import Tabs from "./Tabs";

export default function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col bg-[#1E1E1E]">
      <div className="sticky top-0 z-10 hidden lg:block">
        <Tabs />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 lg:p-4">
          <div className="bg-[#1E1E1E] h-full">
            <div className="p-3 lg:p-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
