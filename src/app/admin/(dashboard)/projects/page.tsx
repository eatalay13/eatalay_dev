import ProjectsContainer from "@/containers/admin/projects/ProjectsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler",
  description: "Proje Yönetimi",
};

export default function ProjectsPage() {
  return <ProjectsContainer />;
}
