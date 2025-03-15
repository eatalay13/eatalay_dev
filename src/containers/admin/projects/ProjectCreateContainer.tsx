"use client";

import ProjectForm from "@/components/ui/ProjectForm";
import { createProject } from "@/lib/actions/project";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

export default function ProjectCreateContainer() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  const onSubmit: SubmitHandler<ProjectFormData> = async (data) => {
    setLoading(true);
    try {
      await createProject({
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
      console.error("Proje oluşturulurken hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Yeni Proje Ekle</h1>
        <p className="mt-2 text-sm text-gray-600">
          Yeni bir proje oluşturmak için aşağıdaki formu doldurun.
        </p>
      </div>

      <ProjectForm
        form={form}
        onSubmit={onSubmit}
        loading={loading}
        isEdit={false}
      />
    </div>
  );
}
