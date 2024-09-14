import ProjectListContainer from "@/containers/project/list";
import { PrismaClient, Project } from "@prisma/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projelerim",
  description: "Projelerim",
};

const prisma = new PrismaClient();

async function getProjects(): Promise<Project[]> {
  const projects = await prisma.project.findMany();

  return projects;
}

async function ProjectPage() {
  const projects = await getProjects();

  return <ProjectListContainer projects={projects} />;
}

export default ProjectPage;
