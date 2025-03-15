import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950">
      <Sidebar />

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow p-4 lg:p-8 mt-16">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
