"use client";

import PageHeader from "@/components/layout/admin/PageHeader";
import ProjectForm from "@/components/ui/ProjectForm";
import { getProjectById, updateProject } from "@/lib/actions/project";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ProjectFormData = {
  name: string;
  slug: string;
  content: string;
  image: string;
  htmlTitle: string;
  htmlDescription: string;
  htmlKeywords: string;
};

type ProjectEditContainerProps = {
  id: string;
};

export default function ProjectEditContainer({
  id,
}: ProjectEditContainerProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string>("");

  const form = useForm<ProjectFormData>({
    defaultValues: {
      name: "",
      slug: "",
      content: "",
      image: "",
      htmlTitle: "",
      htmlDescription: "",
      htmlKeywords: "",
    },
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const project = await getProjectById(id);

        if (!project) {
          setError("Proje bulunamadı");
          return;
        }

        setProjectName(project.name);

        form.reset({
          name: project.name,
          slug: project.slug,
          content: project.content,
          image: project.image,
          htmlTitle: project.HtmlSeoContent.title,
          htmlDescription: project.HtmlSeoContent.description,
          htmlKeywords: project.HtmlSeoContent.keywords,
        });
      } catch (error) {
        console.error("Proje yüklenirken hata oluştu:", error);
        setError("Proje yüklenirken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, form]);

  const onSubmit: SubmitHandler<ProjectFormData> = async (data) => {
    setLoading(true);
    try {
      await updateProject(id, {
        name: data.name,
        slug: data.slug,
        content: data.content,
        image: data.image,
        htmlSeoContent: {
          title: data.htmlTitle,
          description: data.htmlDescription,
          keywords: data.htmlKeywords,
        },
      });

      router.push("/admin/projects");
    } catch (error) {
      console.error("Proje güncellenirken hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={`"${projectName}" Projesini Düzenle`}
        description="Projeyi düzenlemek için aşağıdaki formu kullanın."
      />

      <ProjectForm
        form={form}
        onSubmit={onSubmit}
        loading={loading}
        isEdit={true}
      />
    </div>
  );
}
