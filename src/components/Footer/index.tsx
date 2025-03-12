import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
              Kişisel Web Sitem | Emrah Atalay
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors">
              © {new Date().getFullYear()} Tüm hakları saklıdır.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Ana Sayfa
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Hakkımda
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projeler
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              İletişim
            </a>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 mr-3 transition-colors">
              Tema
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
