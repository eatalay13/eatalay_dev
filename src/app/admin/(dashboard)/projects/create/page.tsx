import ProjectCreateContainer from "@/containers/admin/projects/ProjectCreateContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yeni Proje Ekle",
  description: "Yeni Proje Ekleme Sayfası",
};

export default function ProjectCreatePage() {
  return <ProjectCreateContainer />;
}
