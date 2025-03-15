"use client";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import NextLink from "next/link";
import { useEffect } from "react";
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

  const content = watch("content");

  // Tiptap editörünü oluştur
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setValue("content", editor.getHTML());
    },
  });

  // İçerik değiştiğinde editörü güncelle
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

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
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-zinc-800">
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
                >
                  Proje Adı
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Projenin adını girin"
                  {...register("name", { required: "Proje adı zorunludur" })}
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
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
                  className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
                >
                  Slug
                </label>
                <input
                  id="slug"
                  type="text"
                  placeholder="proje-slug"
                  {...register("slug", { required: "Slug zorunludur" })}
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
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
                  className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
                >
                  Görsel URL
                </label>
                <input
                  id="image"
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  {...register("image", { required: "Görsel URL zorunludur" })}
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
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
                  className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
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
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
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
                  className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
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
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
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
                  className="block text-sm font-medium text-gray-700 dark:text-white mb-1"
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
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
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
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
            >
              İçerik
            </label>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Tiptap Editör Araç Çubuğu */}
              <div className="bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 p-2 flex flex-wrap gap-1 text-gray-900 dark:text-white">
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("bold")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Kalın"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("italic")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="İtalik"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="4" x2="10" y2="4"></line>
                    <line x1="14" y1="20" x2="5" y2="20"></line>
                    <line x1="15" y1="4" x2="9" y2="20"></line>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("heading", { level: 1 })
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Başlık 1"
                >
                  H1
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("heading", { level: 2 })
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Başlık 2"
                >
                  H2
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor?.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("heading", { level: 3 })
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Başlık 3"
                >
                  H3
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor?.chain().focus().toggleBulletList().run()
                  }
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("bulletList")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Madde İşaretli Liste"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor?.chain().focus().toggleOrderedList().run()
                  }
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("orderedList")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Numaralı Liste"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="10" y1="6" x2="21" y2="6"></line>
                    <line x1="10" y1="12" x2="21" y2="12"></line>
                    <line x1="10" y1="18" x2="21" y2="18"></line>
                    <path d="M4 6h1v4"></path>
                    <path d="M4 10h2"></path>
                    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor?.chain().focus().toggleBlockquote().run()
                  }
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("blockquote")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Alıntı"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const url = window.prompt("URL girin:");
                    if (url) {
                      editor?.chain().focus().setImage({ src: url }).run();
                    }
                  }}
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("image")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Resim Ekle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const url = window.prompt("URL girin:");
                    if (url) {
                      editor
                        ?.chain()
                        .focus()
                        .extendMarkRange("link")
                        .setLink({ href: url })
                        .run();
                    }
                  }}
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("link")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Bağlantı Ekle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().undo().run()}
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("undo")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="Geri Al"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="1 4 1 10 7 10"></polyline>
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().redo().run()}
                  className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-800 ${
                    editor?.isActive("redo")
                      ? "bg-gray-200 dark:bg-zinc-800"
                      : ""
                  }`}
                  title="İleri Al"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                  </svg>
                </button>
              </div>

              {/* Tiptap Editör İçeriği */}
              <EditorContent
                editor={editor}
                className="prose max-w-none p-4 min-h-[300px] focus:outline-none dark:prose-invert"
              />

              {errors.content && (
                <p className="mt-1.5 text-sm text-red-500 font-medium p-2 border-t border-gray-200">
                  {errors.content.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="px-8 py-5 bg-gray-50 dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 flex justify-end space-x-4">
          <NextLink
            href="/admin/projects"
            className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-zinc-800 text-gray-700 dark:text-white font-medium text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            İptal
          </NextLink>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-medium text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
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
