"use client";

import { useEffect, useState } from "react";

const Footer = (): JSX.Element => {
    const [currentYear, setCurrentYear] = useState<number>();

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="mt-6 md:mt-12 w-full flex flex-col md:flex-row justify-between">
            <div className="flex space-x-3 md:space-x-4 text-dark-900 dark:text-light-900">
                <span className="text-sm md:text-base"> &copy; eatalay.dev {currentYear} @ All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;