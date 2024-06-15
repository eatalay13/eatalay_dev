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
                <div className="p-4">
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
            </div>
        </>
    );
}

export default Drawer;