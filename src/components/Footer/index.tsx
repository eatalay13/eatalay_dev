import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Hakkımda Bölümü */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Emrah Atalay
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
              Modern web teknolojileri ile yenilikçi çözümler geliştiren Full
              Stack Developer.
            </p>{" "}
            <div className="flex space-x-5 mt-4">
              <a
                href="https://github.com/eatalay13"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors transform hover:scale-110 duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emrahatalay"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors transform hover:scale-110 duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Hızlı Erişim
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Projelerim
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              İletişim
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <HiOutlineMail className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2 mt-0.5" />
                <a
                  href="mailto:emrahatalay92@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  emrahatalay92@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <HiOutlineLocationMarker className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 transition-colors">
                  Bitlis, Türkiye
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
            © {new Date().getFullYear()} Emrah Atalay. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 transition-colors">
            Next.js, Tailwind CSS ve React ile geliştirilmiştir.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
