declare global {
	interface Window {
		gtag: any;
	}
}

export type Project = {
    name: string;
    description: string;
    image: string;
    url: string;
    github: string;
    isActive: boolean;
    icon: string;
}
