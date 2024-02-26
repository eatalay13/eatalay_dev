"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed bottom-8 right-8">
            <button
                type="button"
                className="w-11 h-11 rounded-full shadow-md inline-flex justify-center items-center focus:outline-none cardTheme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? "< /> " : "<IconSun />"}
            </button>
        </div>
    );
};