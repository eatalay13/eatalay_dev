import React from "react";

export default function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-4 mt-4 sm:mt-8">
      <div className="bg-editor-bg rounded-lg shadow-xl border border-editor-line">
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-editor-line rounded-t-lg">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-xs sm:text-sm text-editor-text opacity-60">
            portfolio.tsx
          </div>
        </div>
        <div className="p-3 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
