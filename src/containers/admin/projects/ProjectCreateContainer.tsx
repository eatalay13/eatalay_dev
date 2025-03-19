"use client";

import PageHeader from "@/components/layout/admin/PageHeader";
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
    <div className="space-y-6">
      <PageHeader
        title="Yeni Proje Ekle"
        description="Yeni bir proje oluşturmak için aşağıdaki formu doldurun."
      />

      <ProjectForm
        form={form}
        onSubmit={onSubmit}
        loading={loading}
        isEdit={false}
      />
    </div>
  );
}
