'use client';

import routes from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Drawer from "../drawer";
import styles from "./styles.module.css";

function Header() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const pathname = usePathname();
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.logo}>
                    <Link href="/">
                        Emrah Atalay
                    </Link>
                </h1>
                <button onClick={toggleDrawer} className="focus:outline-none sm:hidden w-full">
                    <svg className="w-6 h-6 float-right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <nav className={styles.nav}>
                    {routes.map((route) => (
                        <Link key={route.path} href={route.path} className={route.path === pathname ? styles.active : ''}>
                            {route.name}
                        </Link>
                    ))}
                </nav>
            </header>
            <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
        </>
    );
}

export default Header;