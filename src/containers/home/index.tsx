import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineLightBulb,
} from "react-icons/hi";

function HomeIndexContainer() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/70 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="relative mb-8 group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70 blur-md group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-full p-1 bg-white dark:bg-gray-950">
                <img
                  src="https://avatars.githubusercontent.com/u/30194127"
                  alt="Avatar"
                  className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white transition-colors">
              <span className="inline-block animate-fadeIn">Merhaba, </span>
              <span className="inline-block animate-fadeIn animation-delay-300">
                ben &nbsp;
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 inline-block animate-fadeIn animation-delay-600">
                Emrah Atalay
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto transition-colors animate-fadeIn animation-delay-900">
              Full Stack Developer olarak modern web teknolojileri ile yenilikçi
              çözümler geliştiriyorum.
            </p>

            <div className="flex gap-4 mb-12 animate-fadeIn animation-delay-1200">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20"
              >
                İletişime Geç
              </a>
              <a
                href="#projects"
                className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-400/20 dark:focus:ring-gray-700/20"
              >
                Projelerimi Gör
              </a>
            </div>

            <div className="flex gap-6 animate-fadeIn animation-delay-1500">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                <FaGithub className="h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                <FaLinkedin className="h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                <FaTwitter className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-950 transition-colors"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Hakkımda
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-colors">
                8+ yıllık deneyimle, modern web teknolojileri konusunda
                uzmanlaşmış bir Full Stack geliştiriciyim. Kullanıcı odaklı,
                performans açısından optimize edilmiş ve ölçeklenebilir
                uygulamalar geliştirmeye tutkuyla bağlıyım.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-colors">
                Frontend'de React, Next.js ve Tailwind CSS; backend'de ise
                Node.js, .NET Core ve veritabanı teknolojileri ile çalışıyorum.
                Sürekli öğrenmeye ve yeni teknolojileri keşfetmeye açığım.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors">
                  .NET Core
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors">
                  SQL
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm transition-colors">
                  Docker
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm transition-colors hover:shadow-md duration-300 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg inline-block mb-4 transition-colors">
                    <HiOutlineCode className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                    Web Geliştirme
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">
                    Modern ve performanslı web uygulamaları geliştiriyorum.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm transition-colors hover:shadow-md duration-300 group">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg inline-block mb-4 transition-colors">
                    <HiOutlineDesktopComputer className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                    Mimari Tasarım
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">
                    Ölçeklenebilir ve sürdürülebilir yazılım mimarileri
                    tasarlıyorum.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm transition-colors hover:shadow-md duration-300 group md:col-span-2">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg inline-block mb-4 transition-colors">
                    <HiOutlineLightBulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                    Problem Çözme
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">
                    Karmaşık problem senaryolarına yaratıcı çözümler buluyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Projelerim
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
              Kendimi geliştirmek ve yeni teknolojileri öğrenmek için yaptığım
              projelerden bazıları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400?text=Proje+1"
                  alt="Proje 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                  E-Ticaret Platformu
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 transition-colors">
                  Next.js, Tailwind CSS ve Stripe ile geliştirilen modern bir
                  e-ticaret platformu. Hızlı sayfa yüklemeleri ve SEO dostu
                  yapısıyla öne çıkıyor.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    Next.js
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    Tailwind
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    Stripe
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Demo
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400?text=Proje+2"
                  alt="Proje 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                  Blog & CMS
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 transition-colors">
                  Contentful CMS ve Next.js ile geliştirilmiş, içerik yönetimini
                  kolaylaştıran modern blog platformu.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    React
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    Next.js
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    Contentful
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Demo
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400?text=Proje+3"
                  alt="Proje 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                  Görev Yönetim Uygulaması
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 transition-colors">
                  React, TypeScript ve .NET Core ile gerçekleştirilen, gerçek
                  zamanlı güncellemeler sunan görev yönetim uygulaması.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    React
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    TypeScript
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                    .NET Core
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Demo
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-medium transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
            >
              Tüm Projeleri Görüntüle
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white dark:bg-gray-950 transition-colors"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              İletişime Geç
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
              Projeleriniz veya işbirliği fırsatları hakkında konuşmak
              isterseniz benimle iletişime geçebilirsiniz
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="İsminizi girin"
                  />
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="E-posta adresinizi girin"
                  />
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
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Mesajınızın konusu"
                />
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
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20"
                >
                  Mesaj Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeIndexContainer;
