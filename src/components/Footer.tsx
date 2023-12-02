import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div>
            <div className="flex flex-col gap-2 justify-center items-center pb-5 pt-5 outline outline-1 footerTheme">
                <p className="text-sm textTheme">
                    © {year} {siteMetadata.author}. All rights reserved.
                </p>
                <p className="text-sm textTheme">
                    Version 1.0.2 | Built with Next.js 14.0.3
                </p>
                <Link
                    href={siteMetadata.siteRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm rounded-xl px-4 py-1 cardTheme textButtonTheme transitionButtonTheme"
                    aria-label="View Source Code on GitHub"
                >
                    <div className="flex items-center">
                        <p>View Source</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
