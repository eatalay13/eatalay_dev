import {
    Fira_Code,
    Inter,
    Lusitana
} from "next/font/google";

const inter = Inter({
    subsets: ["latin"]
});

const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const firaCode = Fira_Code({
    subsets: ["latin"],
    weight: "400"
});

export {
    firaCode, inter, lusitana
};
