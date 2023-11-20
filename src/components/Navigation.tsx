"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BlobEffect from "./BlobEffect";

const Navigation = () => {
    const pathname = usePathname()

    console.log(pathname);

    const navBlobClass = () => {
        switch (pathname) {
            case "/":
                return "bg-yellow-200 dark:bg-yellow-500 left-2"
            case "about":
                return "bg-purple-200 dark:bg-purple-500  left-18  md:left-22"
            case "project":
                return "bg-blue-200 dark:bg-blue-500  left-34  md:left-42"
            case "blog":
            case "blog-slug":
                return "bg-red-300 dark:bg-red-500  left-50  md:left-62"
        }
    }


    return (
        <>
            <nav className="relative flex space-x-4 md:space-x-6 items-center text-base md:text-lg font-space">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/project">Project</Link>
                <Link href="/blog">Blog</Link>
            </nav>

            <BlobEffect className={navBlobClass()} />
        </>
    );
};

export default Navigation;