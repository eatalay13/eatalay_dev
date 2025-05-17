"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const t = useTranslations("Contact.form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Burada gerçek bir form gönderme API'si entegre edilebilir
    try {
      // API çağrısını simüle ediyoruz
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
    } catch (error) {
      console.error("Form gönderim hatası:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-sm border border-slate-100 dark:border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl"></div>

      {/* Dekoratif çizgiler */}
      <div className="absolute top-0 left-10 w-[1px] h-10 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
      <div className="absolute top-10 left-0 h-[1px] w-10 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      <div className="absolute bottom-0 right-10 w-[1px] h-10 bg-gradient-to-t from-transparent via-indigo-400/30 to-transparent"></div>
      <div className="absolute bottom-10 right-0 h-[1px] w-10 bg-gradient-to-l from-transparent via-indigo-400/30 to-transparent"></div>

      {submitStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            {t("success")}
          </h3>
          <button
            onClick={() => setSubmitStatus(null)}
            className="mt-4 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline"
          >
            Yeni mesaj gönder
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              {t("subject")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all"
            ></textarea>
          </motion.div>

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-md p-3 text-sm"
            >
              {t("error")}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-3"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
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
                  {t("sending")}
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  {t("send")}
                </>
              )}
            </button>
          </motion.div>
        </form>
      )}
    </motion.div>
  );
}
