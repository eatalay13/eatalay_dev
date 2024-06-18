import AboutContainer from "@/containers/about-container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımda",
    description: "Emrah Atalay'ın kişisel web sitesi",
};

const AboutPage = () => <AboutContainer />;

export default AboutPage;