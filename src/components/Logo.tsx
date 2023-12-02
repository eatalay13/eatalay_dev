import SiteInfo from "@/data/siteMetadata";

export default function Logo() {
    return (
        <div className="flex items-center">
            <p className="font-medium text-md textButtonSecondaryTheme transitionButtonTheme">
                {SiteInfo.siteUrl}
            </p>
        </div>
    );
}
