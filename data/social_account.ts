class SocialAccount {
    id: number;
    name: string;
    url: string;
    icon: string;

    constructor(id: number, name: string, url: string, icon: string) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.icon = icon;
    }
}

export let socialAccounts: SocialAccount[] = [
    new SocialAccount(1, 'Facebook', 'https://www.facebook.com/', 'facebook'),
    new SocialAccount(2, 'Twitter', 'https://twitter.com/', 'twitter'),
    new SocialAccount(3, 'LinkedIn', 'https://www.linkedin.com/', 'linkedin'),
    new SocialAccount(4, 'Pinterest', 'https://www.pinterest.com/', 'pinterest'),
    new SocialAccount(5, 'Instagram', 'https://www.instagram.com/', 'instagram'),
    new SocialAccount(6, 'Youtube', 'https://www.youtube.com/@emrahatalay', 'youtube'),
];