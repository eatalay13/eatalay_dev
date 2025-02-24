"use client";

import { useExplorer } from "@/context/ExplorerContext";
import { useTab } from "@/context/TabContext";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiFile,
  FiFolder,
} from "react-icons/fi";

interface ExplorerItem {
  name: string;
  type: "folder" | "file";
  children?: ExplorerItem[];
}

const explorerData: ExplorerItem[] = [
  {
    name: "portfolio",
    type: "folder",
    children: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              {
                name: "home",
                type: "folder",
                children: [
                  { name: "portfolio.tsx", type: "file" },
                  { name: "projects.tsx", type: "file" },
                  { name: "skills.tsx", type: "file" },
                  { name: "contact.tsx", type: "file" },
                ],
              },
              {
                name: "layout",
                type: "folder",
                children: [
                  { name: "Explorer.tsx", type: "file" },
                  { name: "Header.tsx", type: "file" },
                  { name: "Terminal.tsx", type: "file" },
                  { name: "Tabs.tsx", type: "file" },
                ],
              },
            ],
          },
          {
            name: "styles",
            type: "folder",
            children: [{ name: "globals.css", type: "file" }],
          },
          { name: "page.tsx", type: "file" },
        ],
      },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
    ],
  },
];

function ExplorerItem({
  item,
  level = 0,
}: {
  item: ExplorerItem;
  level?: number;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const { addTab } = useTab();

  const handleFileClick = (fileName: string) => {
    let path = "/";
    let id = "home";

    switch (fileName.toLowerCase()) {
      case "projects.tsx":
        path = "/projects";
        id = "projects";
        break;
      case "skills.tsx":
        path = "/skills";
        id = "skills";
        break;
      case "contact.tsx":
        path = "/contact";
        id = "contact";
        break;
    }

    addTab({ id, title: fileName, path });
    router.push(path);
  };

  return (
    <div>
      <div
        className={`flex items-center gap-1 px-2 py-1 hover:bg-editor-line cursor-pointer text-sm`}
        style={{ paddingLeft: `${level * 12}px` }}
        onClick={() => {
          if (item.type === "folder") {
            setIsOpen(!isOpen);
          } else {
            handleFileClick(item.name);
          }
        }}
      >
        {item.type === "folder" ? (
          <>
            {isOpen ? (
              <FiChevronDown className="text-editor-text" />
            ) : (
              <FiChevronRight className="text-editor-text" />
            )}
            <FiFolder className="text-editor-function" />
          </>
        ) : (
          <FiFile className="text-editor-variable ml-4" />
        )}
        <span className="text-editor-text">{item.name}</span>
      </div>
      {item.type === "folder" && isOpen && item.children && (
        <div>
          {item.children.map((child, index) => (
            <ExplorerItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Explorer() {
  const [width, setWidth] = useState(256);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const explorerRef = useRef<HTMLDivElement>(null);
  const { isExplorerOpen, toggleExplorer } = useExplorer();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const newWidth = e.clientX;
      if (newWidth > 160 && newWidth < 600) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  if (!isExplorerOpen) return null;

  return (
    <>
      {isExplorerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => toggleExplorer()}
        />
      )}
      <div
        ref={explorerRef}
        className={`
          fixed lg:relative
          z-30 lg:z-auto
          w-[80%] lg:w-[${width}px]
          h-[calc(100%-32px)] lg:h-full
          bg-editor-bg border-r border-editor-line
          overflow-hidden transition-all duration-300
          ${isExplorerOpen ? "left-0" : "-left-full lg:left-0"}
        `}
        style={{
          width: isExplorerOpen
            ? !isMobile
              ? `${width}px`
              : "80%"
            : undefined,
        }}
      >
        <div className="p-2 text-sm font-semibold text-editor-text border-b border-editor-line">
          EXPLORER
        </div>
        <div className="overflow-y-auto h-[calc(100%-32px)]">
          {explorerData.map((item, index) => (
            <ExplorerItem key={index} item={item} />
          ))}
        </div>
        <div
          className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-editor-line hidden lg:block"
          onMouseDown={() => setIsResizing(true)}
        />
      </div>
    </>
  );
}
