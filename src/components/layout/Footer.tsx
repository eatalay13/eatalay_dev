import Link from "next/link";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbMail,
} from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950">
      <div className="container px-4 py-12 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand & About */}
          <div className="md:col-span-5">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Emrah Atalay
              </h3>
              <p className="mt-1 text-sm font-medium text-teal-500 dark:text-teal-400">
                Full Stack Developer
              </p>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-md">
              Modern web teknolojileriyle ölçeklenebilir, kullanıcı dostu ve
              hızlı uygulamalar geliştirir. Yazılım mimarisi ve kullanıcı
              deneyimi odaklı çözümler sunar.
            </p>
            <div className="flex space-x-4">
              <SocialIconLink
                href="https://github.com/eatalay13"
                icon={<TbBrandGithub className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialIconLink
                href="https://www.linkedin.com/in/emrahatalay"
                icon={<TbBrandLinkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <SocialIconLink
                href="https://twitter.com"
                icon={<TbBrandTwitter className="w-5 h-5" />}
                label="Twitter"
              />
              <SocialIconLink
                href="mailto:emrahatalay92@gmail.com"
                icon={<TbMail className="w-5 h-5" />}
                label="E-posta"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:ml-auto">
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Sayfalar
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/">Ana Sayfa</FooterLink>
              <FooterLink href="/#about">Hakkımda</FooterLink>
              <FooterLink href="/projects">Projeler</FooterLink>
              <FooterLink href="/contact">İletişim</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              İletişim
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                Bitlis, Türkiye
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <a
                  href="mailto:emrahatalay92@gmail.com"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  emrahatalay92@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Emrah Atalay. Tüm hakları saklıdır.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="mr-1">💻</span> ile kodlandı
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm"
    >
      {children}
    </Link>
  </li>
);

const SocialIconLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
