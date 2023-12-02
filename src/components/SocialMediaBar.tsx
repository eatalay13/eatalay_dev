import WebLinks from "@/data/siteMetadata";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialMediaBar() {
    const iconSize = 20 as number;

    return (
        <div className="flex flex-row items-center justify-center">
            <Link
                href={`${WebLinks.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 textButtonTheme transitionButtonTheme"
                aria-label={`Visit GitHub profile of ${WebLinks.github}`}
            >
                <FaGithub size={iconSize} />
            </Link>
            <Link
                href={WebLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 textButtonTheme transitionButtonTheme"
                aria-label={`Visit Twitter profile of ${WebLinks.twitter}`}
            >
                <FaXTwitter size={iconSize} />
            </Link>
            <Link
                href={WebLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 textButtonTheme transitionButtonTheme"
                aria-label={`Visit Linkedin profile of ${WebLinks.linkedin}`}
            >
                <FaLinkedinIn size={iconSize} />
            </Link>
            <Link
                href={WebLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="textButtonTheme transitionButtonTheme"
                aria-label={`Visit YouTube profile of ${WebLinks.youtube}`}
            >
                <FaYoutube size={iconSize} />
            </Link>
        </div>
    );
}
