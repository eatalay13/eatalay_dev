import TopProjectCardList from "@comp/cards/topProjectCard";
import { Project } from "types/types";

export default function HomeContainer() {
    let projects: Project[] = [
        {
            name: "Emrah Atalay Kişisel Web Sitesi",
            description: "Kişisel Web Sitesi",
            image: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
            url: "/",
            github: "",
            isActive: true,
            icon: "fas fa-walking",
        },
        {
            name: "Namaz Vakitleri Uygulaması",
            description: "Mobil Uygulama",
            image: "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
            url: "/",
            github: "",
            isActive: false,
            icon: "fas fa-tree",
        },];

    return <TopProjectCardList projects={projects}/>
}