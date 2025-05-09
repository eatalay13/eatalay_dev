"use client";

import { generateFormToken, sendContactMessage } from "@/lib/actions/contact";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaMapLocationDot } from "react-icons/fa6";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Gönderiliyor..." : "Mesaj Gönder"}
    </button>
  );
}

function ContactContainer() {
  const formRef = useRef<HTMLFormElement>(null);
  const [token, setToken] = useState<string>("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [state, formAction] = useActionState(sendContactMessage, {
    success: false,
  });

  // Form token oluştur
  useEffect(() => {
    const getToken = async () => {
      const token = await generateFormToken();
      setToken(token);
    };

    getToken();
  }, []);

  // Form state değiştiğinde mesajı göster ve formu sıfırla
  useEffect(() => {
    if (state) {
      if (state.success) {
        setMessage({
          type: "success",
          text: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
        });
        formRef.current?.reset();
      } else if (state.error) {
        setMessage({ type: "error", text: state.error });
      }
    }
  }, [state]);
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/70 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              İletişime Geç
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
              Projeleriniz, işbirliği fırsatları veya herhangi bir soru için
              benimle iletişime geçebilirsiniz. En kısa sürede size dönüş
              yapacağım.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-sm transition-colors h-full">
                <div className="flex items-center mb-8">
                  <div className="relative mr-4">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70 blur-md"></div>
                    <div className="relative rounded-full p-1 bg-white dark:bg-gray-950">
                      <Image
                        src="https://avatars.githubusercontent.com/u/30194127"
                        width={80}
                        height={80}
                        alt="Emrah Atalay"
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                      Emrah Atalay
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-8 transition-colors">
                  8+ yıllık deneyimle, modern web teknolojileri konusunda
                  uzmanlaşmış bir Full Stack geliştiriciyim. Kullanıcı odaklı,
                  performans açısından optimize edilmiş ve ölçeklenebilir
                  uygulamalar geliştirmeye tutkuyla bağlıyım.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4 transition-colors">
                      <FaMapLocationDot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white transition-colors">
                        Konum
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 transition-colors">
                        Bitlis, Türkiye
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4 transition-colors">
                      <FaEnvelope className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white transition-colors">
                        E-posta
                      </h4>
                      <Link
                        href="mailto:emrahatalay92@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                      >
                        emrahatalay92@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4 transition-colors">
                    Sosyal Medya
                  </h4>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/eatalay13"
                      target="_blank"
                      className="bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-lg transition-colors"
                    >
                      <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/emrahatalay"
                      target="_blank"
                      className="bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-lg transition-colors"
                    >
                      <FaLinkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                  Mesaj Gönder
                </h3>

                {/* Başarı veya hata mesajı */}
                {message && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      message.type === "success"
                        ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <form ref={formRef} action={formAction} className="space-y-6">
                  {/* CSRF token */}
                  <input type="hidden" name="formToken" value={token} />

                  {/* Honeypot alan (botlar için tuzak) */}
                  <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors"
                      >
                        İsim
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                        placeholder="İsminizi girin"
                      />
                      {state?.fieldErrors?.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {state.fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors"
                      >
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                        placeholder="E-posta adresinizi girin"
                      />
                      {state?.fieldErrors?.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {state.fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors"
                    >
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="Mesajınızın konusu"
                    />
                    {state?.fieldErrors?.title && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {state.fieldErrors.title}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                    {state?.fieldErrors?.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {state.fieldErrors.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <SubmitButton />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Sık Sorulan Sorular
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
                  Hangi teknolojilerle çalışıyorsunuz?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors">
                  Frontend'de React, Next.js ve Tailwind CSS; backend'de ise
                  Node.js, .NET Core ve veritabanı teknolojileri ile
                  çalışıyorum. Sürekli öğrenmeye ve yeni teknolojileri
                  keşfetmeye açığım.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
                  Uzaktan çalışma yapıyor musunuz?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors">
                  Evet, uzaktan çalışma konusunda deneyimliyim ve farklı zaman
                  dilimlerindeki ekiplerle çalışabiliyorum. Etkili iletişim ve
                  proje yönetimi araçlarını kullanarak verimli bir iş akışı
                  sağlıyorum.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
                  Bir proje için ne kadar süre ayırabilirsiniz?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors">
                  Proje kapsamına bağlı olarak tam zamanlı veya yarı zamanlı
                  çalışabilirim. Her projenin ihtiyaçlarına göre esnek bir
                  çalışma planı oluşturuyorum. Detaylı bilgi için lütfen
                  iletişime geçin.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
                  Mesajıma ne kadar sürede dönüş yaparsınız?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors">
                  Genellikle 24 saat içerisinde tüm mesajlara dönüş yapmaya
                  çalışıyorum. Acil durumlarda daha hızlı yanıt verebilirim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactContainer;
