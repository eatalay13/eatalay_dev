import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/70 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Projelerim
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
              Kendimi geliştirmek ve yeni teknolojileri öğrenmek için yaptığım
              projelerden bazıları
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card - Beste5 */}
        <Link href="/projeler/beste5" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image
                src="https://play-lh.googleusercontent.com/CE9Iiinei8z4tbGiFzfKbUzYm3fjWS96ec3EAdyuxs04ZYSMYKv7fYnOBZADW_W0-8U=w480-h960-rw"
                width={400}
                height={400}
                alt="Beste5 Mobil Uygulaması"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                Beste5 - Namaz Takip Uygulaması
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 transition-colors">
                Flutter ve Firebase ile geliştirilen, namaz vakitlerini takip
                etmeyi ve namaz alışkanlığı kazanmayı kolaylaştıran mobil
                uygulama.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                  Flutter
                </span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                  Firebase
                </span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded transition-colors">
                  Dart
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-600 dark:text-blue-400 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300">
                  Detayları Gör
                </span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sozlerkosku.beste5v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </Link>

        {/* Project Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
          <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/30194127"
              width={400}
              height={400}
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
            <Image
              src="https://avatars.githubusercontent.com/u/30194127"
              width={400}
              height={400}
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
      </div>
    </>
  );
}
