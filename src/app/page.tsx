import HomeIndexContainer from "@/containers/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emrah Atalay",
  description: "Emrah Atalay is a software engineer",
};

export default function Home() {
  return <HomeIndexContainer />;
}
