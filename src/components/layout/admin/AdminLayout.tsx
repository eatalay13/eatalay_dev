import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        <footer className="bg-white shadow-sm p-4 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Admin Panel. Tüm hakları saklıdır.
          </p>
        </footer>
      </div>
    </div>
  );
}
