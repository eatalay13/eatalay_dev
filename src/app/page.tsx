import HomeIndexContainer from "@/containers/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emrah Atalay",
  description: "Emrah Atalay is a software engineer",
};

function Home() {
  return <HomeIndexContainer />;
}

export default Home;
