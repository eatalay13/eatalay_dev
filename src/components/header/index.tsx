'use client';

import routes from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

function Header() {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <Link href="/">
                    Emrah Atalay
                </Link>
            </h1>
            <nav className={styles.nav}>
                {routes.map((route) => (
                    <Link key={route.path} href={route.path} className={route.path === pathname ? styles.active : ''}>
                        {route.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;