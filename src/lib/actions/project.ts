"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Tüm projeleri getir
export async function getAllProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return projects;
  } catch (error) {
    console.error("Projeler getirilirken hata oluştu:", error);
    throw new Error("Projeler getirilirken bir hata oluştu");
  }
}

// ID'ye göre proje getir
export async function getProjectById(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
      include: {
        HtmlSeoContent: true,
      },
    });

    return project;
  } catch (error) {
    console.error("Proje getirilirken hata oluştu:", error);
    throw new Error("Proje getirilirken bir hata oluştu");
  }
}

// Yeni proje oluştur
type CreateProjectInput = {
  name: string;
  slug: string;
  content: string;
  image: string;
  htmlSeoContent: {
    title: string;
    description: string;
    keywords: string;
  };
};

export async function createProject(data: CreateProjectInput) {
  try {
    const project = await prisma.project.create({
      data: {
        name: data.name,
        slug: data.slug,
        content: data.content,
        image: data.image,
        HtmlSeoContent: {
          create: {
            title: data.htmlSeoContent.title,
            description: data.htmlSeoContent.description,
            keywords: data.htmlSeoContent.keywords,
            content: "",
          },
        },
      },
    });

    revalidatePath("/admin/projects");
    return project;
  } catch (error) {
    console.error("Proje oluşturulurken hata oluştu:", error);
    throw new Error("Proje oluşturulurken bir hata oluştu");
  }
}

// Projeyi güncelle
type UpdateProjectInput = {
  name: string;
  slug: string;
  content: string;
  image: string;
  htmlSeoContent: {
    title: string;
    description: string;
    keywords: string;
  };
};

export async function updateProject(id: string, data: UpdateProjectInput) {
  try {
    // Önce projeyi ve ilişkili HtmlSeoContent'i al
    const project = await prisma.project.findUnique({
      where: { id },
      include: { HtmlSeoContent: true },
    });

    if (!project) {
      throw new Error("Proje bulunamadı");
    }

    // Projeyi güncelle
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
        content: data.content,
        image: data.image,
        HtmlSeoContent: {
          update: {
            title: data.htmlSeoContent.title,
            description: data.htmlSeoContent.description,
            keywords: data.htmlSeoContent.keywords,
          },
        },
      },
    });

    revalidatePath("/admin/projects");
    return updatedProject;
  } catch (error) {
    console.error("Proje güncellenirken hata oluştu:", error);
    throw new Error("Proje güncellenirken bir hata oluştu");
  }
}

// Projeyi sil
export async function deleteProject(id: string) {
  try {
    // Önce projeyi ve ilişkili HtmlSeoContent'i al
    const project = await prisma.project.findUnique({
      where: { id },
      include: { HtmlSeoContent: true },
    });

    if (!project) {
      throw new Error("Proje bulunamadı");
    }

    // Önce projeyi sil
    await prisma.project.delete({
      where: { id },
    });

    // Sonra HtmlSeoContent'i sil
    await prisma.htmlSeoContent.delete({
      where: { id: project.HtmlSeoContentId },
    });

    revalidatePath("/admin/projects");
    return { success: true };
  } catch (error) {
    console.error("Proje silinirken hata oluştu:", error);
    throw new Error("Proje silinirken bir hata oluştu");
  }
}
