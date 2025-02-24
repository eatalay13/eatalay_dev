"use client";

import { useExplorer } from "@/context/ExplorerContext";
import { VscMenu } from "react-icons/vsc";

export default function Header() {
  const { toggleExplorer } = useExplorer();

  return (
    <div className="h-8 bg-[#3C3C3C] flex items-center select-none">
      {/* macOS window controls */}
      <div className="flex-none flex items-center gap-2 px-3">
        <div className="flex gap-1.5">
          <button className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80" />
          <button className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80" />
          <button className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80" />
        </div>
      </div>

      {/* Menu button and text */}
      <div className="flex-none lg:w-56 flex items-center text-[#CCCCCC] text-xs">
        <button
          onClick={toggleExplorer}
          className="hover:bg-[#505050] p-1 rounded"
        >
          <VscMenu className="mr-2" />
        </button>
        <span className="hidden lg:inline">
          File Edit View Go Terminal Help
        </span>
      </div>

      {/* Center title */}
      <div className="flex-1 flex items-center justify-center text-xs text-[#CCCCCC] opacity-60 truncate px-2">
        portfolio.tsx - Visual Studio Code
      </div>

      {/* Empty space for symmetry */}
      <div className="flex-none w-[116px]" />
    </div>
  );
}
