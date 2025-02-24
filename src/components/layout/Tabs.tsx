"use client";

import { useTab } from "@/context/TabContext";
import { useRouter } from "next/navigation";
import { VscClose, VscCode } from "react-icons/vsc";

export default function Tabs() {
  const { tabs, activeTab, setActiveTab, removeTab } = useTab();
  const router = useRouter();

  const handleTabClick = (id: string, path: string) => {
    setActiveTab(id);
    router.push(path);
  };

  const handleTabClose = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeTab(id);
  };

  return (
    <div className="h-9 bg-[#252526] flex items-center overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`h-full flex items-center px-3 gap-2 text-[13px] border-r border-[#1E1E1E] cursor-pointer group relative ${
            activeTab === tab.id
              ? "bg-[#1E1E1E] text-[#FFFFFF]"
              : "bg-[#2D2D2D] text-[#969696] hover:text-[#FFFFFF]"
          }`}
          onClick={() => handleTabClick(tab.id, tab.path)}
        >
          <VscCode className="w-4 h-4" />
          <span>{tab.title}</span>
          {tabs.length > 1 && (
            <button
              className="opacity-0 group-hover:opacity-100 hover:bg-[#404040] rounded p-0.5"
              onClick={(e) => handleTabClose(e, tab.id)}
            >
              <VscClose className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
