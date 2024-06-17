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
            <div className={`fixed inset-0 bg-black bg-opacity-75 z-10 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeDrawer}></div>
            <div className={`fixed top-0 right-0 w-64 bg-white dark:bg-gray-800 h-full text-center shadow-lg z-20 transform transition-transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-4 flex-grow">
                        <h2 className="text-xl font-bold mb-4">Menu</h2>
                        <hr className="mb-4 opacity-10" />
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
                </div>
            </div>
        </>
    );
}

export default Drawer;