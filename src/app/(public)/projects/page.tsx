import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projelerim",
  description:
    "Emrah Atalay'ın projeleri. Web ve mobil uygulama geliştirme, tasarım ve daha fazlası.",
  openGraph: {
    title: "Projelerim",
    description:
      "Emrah Atalay'ın projeleri. Web ve mobil uygulama geliştirme, tasarım ve daha fazlası.",
    url: "/proje",
    images: [
      {
        url: "https://example.com/image.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

function ProjectsPage() {
  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950 transition-colors duration-500"></div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
              Projelerim
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Kendimi geliştirmek ve yeni teknolojileri öğrenmek için yaptığım
              projelerden bazıları
            </p>
          </div>

          {/* Filter Categories - Static for now, would be dynamic with useState in a client component */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Tümü
            </button>
            <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Mobil
            </button>
            <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Web
            </button>
            <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Tasarım
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 md:gap-1">
            {/* Project Card - Beste5 */}
            <Link
              href="/proje/beste5"
              className="group block relative overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="https://play-lh.googleusercontent.com/CE9Iiinei8z4tbGiFzfKbUzYm3fjWS96ec3EAdyuxs04ZYSMYKv7fYnOBZADW_W0-8U=w480-h960-rw"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Beste5 Mobil Uygulaması"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-medium text-white mb-2">
                      Beste5 - Namaz Takip Uygulaması
                    </h3>
                    <span className="inline-block text-sm text-blue-400 font-medium">
                      Mobil
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project Card - E-Ticaret */}
            <div className="group block relative overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="https://avatars.githubusercontent.com/u/30194127"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="E-Ticaret Platformu"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-medium text-white mb-2">
                      E-Ticaret Platformu
                    </h3>
                    <span className="inline-block text-sm text-blue-400 font-medium">
                      Web
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card - Blog & CMS */}
            <div className="group block relative overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="https://avatars.githubusercontent.com/u/30194127"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Blog & CMS"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-medium text-white mb-2">
                      Blog & CMS
                    </h3>
                    <span className="inline-block text-sm text-blue-400 font-medium">
                      Web
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Project Cards */}
            <div className="group block relative overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Mobil Uygulama"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-medium text-white mb-2">
                      Mobil Uygulama
                    </h3>
                    <span className="inline-block text-sm text-blue-400 font-medium">
                      Tasarım
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group block relative overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Minimal Tasarım"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-medium text-white mb-2">
                      Minimal Tasarım
                    </h3>
                    <span className="inline-block text-sm text-blue-400 font-medium">
                      Tasarım
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group block relative overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Web Sitesi"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-medium text-white mb-2">
                      Web Sitesi
                    </h3>
                    <span className="inline-block text-sm text-blue-400 font-medium">
                      Web
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Bir Projeye mi İhtiyacınız Var?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
              Fikirlerinizi hayata geçirmek için benimle iletişime geçin.
              Birlikte harika işler çıkarabiliriz.
            </p>
            <Link
              href="/iletisim"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-sm transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
