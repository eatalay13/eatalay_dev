'use client';

import cn from "classnames";

import {
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    HomeIcon,
    PowerIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Anasayfa', href: '/dashboard', icon: HomeIcon },
    {
        name: 'Bloglar',
        href: '/dashboard/invoices',
        icon: DocumentDuplicateIcon,
    },
    { name: 'Kullacılar', href: '/dashboard/customers', icon: UserGroupIcon },
    { name: 'Ayarlar', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

function Sidebar() {
    const pathname = usePathname();
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    <h1 className="text-2xl font-bold">eatalay.dev</h1>
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-900 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                {
                                    'bg-sky-100 text-blue-600': pathname === link.href,
                                },
                            )}
                        >
                            <LinkIcon className="w-6" />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                    );
                })}
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-gray-900 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-900 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Çıkış</div>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Sidebar;