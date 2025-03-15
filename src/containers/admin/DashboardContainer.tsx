import Link from "next/link";

export default function DashboardContainer() {
  // Örnek istatistik verileri
  const stats = [
    { name: "Toplam Blog", value: "24", href: "/admin/blogs" },
    { name: "Toplam Proje", value: "12", href: "/admin/projects" },
    { name: "Toplam Kategori", value: "8", href: "/admin/categories" },
    { name: "Toplam Etiket", value: "36", href: "/admin/tags" },
    { name: "Okunmamış Mesaj", value: "5", href: "/admin/contacts" },
    { name: "Toplam Kullanıcı", value: "3", href: "/admin/users" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Sitenizin genel durumunu gösteren istatistikler
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="bg-white dark:bg-zinc-900 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    {stat.name}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <div className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                  Detayları Görüntüle
                  <span className="ml-1" aria-hidden="true">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-900 shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Son Aktiviteler
          </h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <li key={index}>
                  <div className="relative pb-8">
                    {index !== 4 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-zinc-200 dark:bg-zinc-800"
                        aria-hidden="true"
                      ></span>
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white dark:ring-gray-900">
                          <svg
                            className="h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Yeni bir{" "}
                            <span className="font-medium text-gray-900 dark:text-white">
                              blog yazısı
                            </span>{" "}
                            eklendi
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                          {index + 1} gün önce
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
