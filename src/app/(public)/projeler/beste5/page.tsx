import Image from "next/image";
import { FaGithub, FaGooglePlay } from "react-icons/fa";

export default function Beste5ProjectPage() {
  // Google Play'den alınan uygulama ekran görüntüleri
  const screenshots = [
    "https://play-lh.googleusercontent.com/irzqhbwi3KYj3ergIYS1S3GWM2KJfgPO6JmqtVoxMtqTg9Pfb2Jxrq-l9YusTIDjWw=w5120-h2880-rw",
    "https://play-lh.googleusercontent.com/rL793zWkF-9MxNHb46IjtmldUoonEDZytoMFkeYd_bjnt9E95UZHcsrY4253PgQAQWE=w5120-h2880-rw",
    "https://play-lh.googleusercontent.com/xB71Brc3p71l0wYe1mZIM4G9noeYX4ue9O_Atya0qoSdpzeEvA4LZ8or85istXgMkNmy=w5120-h2880-rw",
    "https://play-lh.googleusercontent.com/SjcnlXvuDeHr27E5WBOabvAoXslnKindaCVyuoZuY8IXSINwaFa_R_T7cku6HJH0fjo=w5120-h2880-rw",
  ];

  // Kullanılan teknolojiler
  const technologies = [
    {
      name: "Flutter",
      description: "UI geliştirme için kullanılan modern framework",
    },
    {
      name: "Firebase",
      description: "Veritabanı, kimlik doğrulama ve bulut fonksiyonları için",
    },
    { name: "Dart", description: "Flutter uygulamaları için programlama dili" },
    { name: "Cloud Firestore", description: "Gerçek zamanlı NoSQL veritabanı" },
    {
      name: "Firebase Auth",
      description: "Kullanıcı kimlik doğrulama sistemi",
    },
    {
      name: "Firebase Cloud Functions",
      description: "Sunucu taraflı işlemler için",
    },
  ];

  // Özellikler
  const features = [
    "Namaz vakitlerini takip etme ve hatırlatma",
    "Kıble yönü bulma",
    "Namaz ve abdest alma rehberleri",
    "Namaz alışkanlığı kazanmak için motivasyon sistemi",
    "Karanlık ve aydınlık tema desteği",
    "Çevrimdışı içerik erişimi",
    "Namaz takvimi ve geçmiş istatistikler",
    "Kullanıcı hesabı oluşturma ve profil yönetimi",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-50/70 to-yellow-800 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Beste5 - Namaz Takip Uygulaması
              </h1>
              <p className="text-xl text-white mb-8">
                Flutter ve Firebase ile geliştirilen, namaz vakitlerini takip
                etmeyi ve namaz alışkanlığı kazanmayı kolaylaştıran modern mobil
                uygulama.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sozlerkosku.beste5v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-yellow-800 px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-yellow-50"
                >
                  <FaGooglePlay className="mr-2" /> Google Play'de Görüntüle
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-white/10"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-tr from-yellow-500 to-yellow-700 p-2 rounded-3xl shadow-2xl">
                  <Image
                    src="https://play-lh.googleusercontent.com/CE9Iiinei8z4tbGiFzfKbUzYm3fjWS96ec3EAdyuxs04ZYSMYKv7fYnOBZADW_W0-8U=w480-h960-rw"
                    width={300}
                    height={600}
                    alt="Beste5 App"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
              Proje Hakkında
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none transition-colors">
              <p>
                Beste5, namaz vakitlerini takip etmeyi ve namaz alışkanlığı
                kazanmayı kolaylaştıran, modern ve kullanıcı dostu bir mobil
                uygulamadır. Bu uygulama, Flutter framework'ü kullanılarak
                geliştirilmiş ve Firebase altyapısı ile desteklenmiştir.
              </p>
              <p>
                Uygulama, kullanıcıların namaz vakitlerini takip edebilmesine,
                kıble yönünü bulabilmesine, namaz ve abdest alma rehberlerine
                erişebilmesine olanak tanır. Ayrıca, namaz alışkanlığı kazanmak
                için motivasyon sistemi ve namaz istatistikleri gibi özellikler
                de sunmaktadır.
              </p>
              <p>
                Beste5, hem aydınlık hem de karanlık tema desteği sunar ve
                kullanıcı deneyimini en üst düzeye çıkarmak için modern bir
                arayüz tasarımına sahiptir. Uygulama, performans ve kullanıcı
                deneyimi açısından optimize edilmiştir.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8 transition-colors">
              Ekran Görüntüleri
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-colors"
                >
                  <Image
                    src={screenshot}
                    width={300}
                    height={600}
                    alt={`Beste5 Screenshot ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8 transition-colors">
              Özellikler
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1 transition-colors">
                    <svg
                      className="h-4 w-4 text-blue-600 dark:text-blue-400"
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
                  <span className="text-gray-700 dark:text-gray-300 transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8 transition-colors">
              Kullanılan Teknolojiler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8 transition-colors">
              Geliştirme Süreci
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16 transition-colors">
              <p>
                Beste5 uygulaması, namaz kılmaya başlamak veya namaz alışkanlığı
                kazanmak isteyen kullanıcıların ihtiyaçlarını karşılamak
                amacıyla geliştirilmiştir. Geliştirme sürecinde, Flutter'ın
                sunduğu cross-platform avantajlarından yararlanarak hem Android
                hem de iOS platformları için tek bir kod tabanı kullanılmıştır.
              </p>
              <p>
                Firebase altyapısı, uygulamanın backend ihtiyaçlarını karşılamak
                için tercih edilmiştir. Cloud Firestore ile namaz vakitleri ve
                kullanıcı verileri için gerçek zamanlı veri senkronizasyonu
                sağlanırken, Firebase Authentication ile güvenli bir kullanıcı
                kimlik doğrulama sistemi oluşturulmuştur. Ayrıca, Firebase Cloud
                Functions kullanılarak namaz vakti bildirimleri gibi sunucu
                taraflı işlemler gerçekleştirilmiştir.
              </p>
              <p>
                Uygulama, kullanıcı geri bildirimleri doğrultusunda sürekli
                olarak geliştirilmekte ve yeni özellikler eklenmektedir. Namaz
                vakitlerinin doğruluğu, kıble yönünün hassasiyeti ve kullanıcı
                deneyimi iyileştirmeleri, geliştirme sürecinin önemli bir
                parçasını oluşturmaktadır.
              </p>
            </div>

            <div className="text-center mt-16">
              <a
                href="https://play.google.com/store/apps/details?id=com.sozlerkosku.beste5v2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20"
              >
                <FaGooglePlay className="mr-2" /> Google Play'den İndir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
