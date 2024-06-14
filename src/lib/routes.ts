declare type AppRoute = {
    name: string;
    path: string;
};

const routes: AppRoute[] = [
    { name: "Anasayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Projeler", path: "/project" },
    { name: "Hakkımda", path: "/about" },
    { name: "İletişim", path: "/contact" },
];

export default routes;