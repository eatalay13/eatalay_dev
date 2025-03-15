"use client";

import { Editor } from "@tinymce/tinymce-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

type ProjectFormData = {
  name: string;
  slug: string;
  content: string;
  image: string;
  htmlTitle: string;
  htmlDescription: string;
  htmlKeywords: string;
};

type ProjectFormProps = {
  form: UseFormReturn<ProjectFormData>;
  onSubmit: SubmitHandler<ProjectFormData>;
  loading: boolean;
  isEdit: boolean;
};

export default function ProjectForm({
  form,
  onSubmit,
  loading,
  isEdit,
}: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = form;

  const editorRef = useRef<any>(null);
  const content = watch("content");

  // Slug oluşturma fonksiyonu
  const generateSlug = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // Boşlukları tire ile değiştir
      .replace(/[^\w\-]+/g, "") // Alfanümerik olmayan karakterleri kaldır
      .replace(/\-\-+/g, "-") // Çoklu tireleri tek tire ile değiştir
      .replace(/^-+/, "") // Baştaki tireleri kaldır
      .replace(/-+$/, ""); // Sondaki tireleri kaldır
  };

  // İsim değiştiğinde slug otomatik oluştur
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "name" && value.name && !isEdit) {
        setValue("slug", generateSlug(value.name));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, isEdit]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Proje Adı
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Projenin adını girin"
                  {...register("name", { required: "Proje adı zorunludur" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-500 font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Slug
                </label>
                <input
                  id="slug"
                  type="text"
                  placeholder="proje-slug"
                  {...register("slug", { required: "Slug zorunludur" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
                {errors.slug && (
                  <p className="mt-1.5 text-sm text-red-500 font-medium">
                    {errors.slug.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Görsel URL
                </label>
                <input
                  id="image"
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  {...register("image", { required: "Görsel URL zorunludur" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
                {errors.image && (
                  <p className="mt-1.5 text-sm text-red-500 font-medium">
                    {errors.image.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="htmlTitle"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  SEO Başlık
                </label>
                <input
                  id="htmlTitle"
                  type="text"
                  placeholder="SEO başlığı girin"
                  {...register("htmlTitle", {
                    required: "SEO başlık zorunludur",
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
                {errors.htmlTitle && (
                  <p className="mt-1.5 text-sm text-red-500 font-medium">
                    {errors.htmlTitle.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="htmlDescription"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  SEO Açıklama
                </label>
                <textarea
                  id="htmlDescription"
                  placeholder="SEO açıklaması girin"
                  {...register("htmlDescription", {
                    required: "SEO açıklama zorunludur",
                  })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                />
                {errors.htmlDescription && (
                  <p className="mt-1.5 text-sm text-red-500 font-medium">
                    {errors.htmlDescription.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="htmlKeywords"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  SEO Anahtar Kelimeler
                </label>
                <input
                  id="htmlKeywords"
                  type="text"
                  placeholder="anahtar, kelimeler, seo"
                  {...register("htmlKeywords", {
                    required: "SEO anahtar kelimeler zorunludur",
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
                {errors.htmlKeywords && (
                  <p className="mt-1.5 text-sm text-red-500 font-medium">
                    {errors.htmlKeywords.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              İçerik
            </label>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={content}
                onEditorChange={(newContent) => setValue("content", newContent)}
                init={{
                  height: 500,
                  menubar: true,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help",
                  content_style:
                    "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 16px; padding: 10px; }",
                  skin: "oxide",
                  statusbar: false,
                }}
              />
              {errors.content && (
                <p className="mt-1.5 text-sm text-red-500 font-medium">
                  {errors.content.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex justify-end space-x-4">
          <Link
            href="/admin/projects"
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            İptal
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                İşleniyor...
              </span>
            ) : isEdit ? (
              "Güncelle"
            ) : (
              "Oluştur"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
