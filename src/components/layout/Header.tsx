"use client";

import { useExplorer } from "@/context/ExplorerContext";
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
  VscMenu,
} from "react-icons/vsc";

export default function Header() {
  const { toggleExplorer } = useExplorer();

  return (
    <div className="h-8 bg-[#3C3C3C] flex items-center select-none">
      <div className="flex-none lg:w-64 flex items-center px-3 text-[#CCCCCC] text-xs">
        <button
          onClick={toggleExplorer}
          className="hover:bg-[#505050] p-1 rounded"
        >
          <VscMenu className="mr-2" />
        </button>
        <span className="hidden lg:inline">
          File Edit Selection View Go Run Terminal Help
        </span>
      </div>
      <div className="flex-1 flex items-center justify-center text-xs text-[#CCCCCC] opacity-60 truncate px-2">
        portfolio.tsx - Visual Studio Code
      </div>
      <div className="flex-none flex items-center">
        <div className="hidden lg:flex">
          <button className="h-8 w-12 hover:bg-[#505050] flex items-center justify-center text-[#CCCCCC]">
            <VscChromeMinimize />
          </button>
          <button className="h-8 w-12 hover:bg-[#505050] flex items-center justify-center text-[#CCCCCC]">
            <VscChromeMaximize />
          </button>
          <button className="h-8 w-12 hover:bg-[#E81123] flex items-center justify-center text-[#CCCCCC]">
            <VscChromeClose />
          </button>
        </div>
      </div>
    </div>
  );
}
