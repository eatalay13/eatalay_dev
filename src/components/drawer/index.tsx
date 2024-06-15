'use client';

import routes from "@/lib/routes";
import cn from "classnames";
import Link from "next/link";

interface DrawerProps {
    isDrawerOpen: boolean;
    closeDrawer: () => void;
}

function Drawer({ isDrawerOpen, closeDrawer }: DrawerProps) {
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeDrawer}></div>
            <div className={`fixed top-0 right-0 w-64 bg-white h-full text-center shadow-lg z-20 transform transition-transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-4 flex-grow">
                        <h2 className="text-xl font-bold mb-4">Menu</h2>
                        <ul>
                            {routes.map((route) => (
                                <li key={route.name} className={cn("mb-4")}>
                                    <Link href={route.path} onClick={closeDrawer}>
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-4">
                        <button className="w-full py-2 text-sm text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 rounded focus:outline-none">
                            {1 === 1 ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drawer;