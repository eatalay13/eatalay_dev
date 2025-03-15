import ProjectEditContainer from "@/containers/admin/projects/ProjectEditContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proje Düzenle",
  description: "Proje Düzenleme Sayfası",
};

type ProjectEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectEditPage({
  params,
}: ProjectEditPageProps) {
  const { id } = await params;
  return <ProjectEditContainer id={id} />;
}
