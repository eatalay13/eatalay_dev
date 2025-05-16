"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  TbArrowRight,
  TbBrain,
  TbBrandGithub,
  TbBrandLinkedin,
  TbCode,
  TbDatabase,
  TbDeviceDesktop,
} from "react-icons/tb";

// Ana container
function HomeContainer() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactCTA />
    </>
  );
}

// Hero Section
const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 -z-10"></div>

      {/* Nokta Deseni */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-[length:20px_20px] -z-10"></div>

      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Sol Taraf - Metin */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/30 text-teal-500 dark:text-teal-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 mr-2"></span>
              Full Stack Developer
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Merhaba, ben{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-teal-500">
                  Emrah Atalay
                </span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-2 bg-teal-500/10 -z-0"></span>
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Modern teknolojiler kullanarak kullanıcı odaklı dijital deneyimler
              tasarlıyor ve geliştiriyorum.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-lg inline-flex items-center transition-all"
              >
                İletişime Geç
                <TbArrowRight className="ml-2" />
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium rounded-lg inline-flex items-center transition-all"
              >
                Projelerimi Gör
              </Link>
            </div>

            {/* Sosyal Medya */}
            <div className="flex items-center space-x-4 mt-10 justify-center lg:justify-start">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Takip Et:
              </span>
              <a
                href="https://github.com/eatalay13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <TbBrandGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emrahatalay"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <TbBrandLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Sağ Taraf - Avatar */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-r from-teal-300 to-teal-100 dark:from-teal-900 dark:to-teal-700 blur-2xl opacity-20 -z-10"></div>
              <div className="relative rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl w-56 h-56 md:w-72 md:h-72">
                <Image
                  src="https://avatars.githubusercontent.com/u/30194127"
                  alt="Emrah Atalay"
                  fill
                  priority
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-cover"
                />
              </div>

              <div className="absolute top-5 -right-5 animate-pulse">
                <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-sm font-medium text-gray-700 dark:text-gray-300">
                  <TbCode className="text-teal-500" />
                  <span>Yazılım Geliştirici</span>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span>8+ Yıl Deneyim</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto max-w-6xl">
        <SectionHeader
          title="Hakkımda"
          subtitle="Kendim ve çalışmalarım hakkında daha fazla bilgi edinebilirsiniz"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              8+ yıldır modern web teknolojileri alanında çalışan bir Full Stack
              geliştiriciyim. Frontend tarafında{" "}
              <span className="text-teal-500 font-medium">React</span>,{" "}
              <span className="text-teal-500 font-medium">Next.js</span> ve{" "}
              <span className="text-teal-500 font-medium">TypeScript</span>;
              Backend tarafında ise{" "}
              <span className="text-teal-500 font-medium">.NET Core</span>,{" "}
              <span className="text-teal-500 font-medium">Node.js</span> ve
              çeşitli veritabanı teknolojileri kullanıyorum.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Kullanıcı deneyimini ön planda tutan, performans ve
              ölçeklenebilirlik konularında optimize edilmiş uygulamalar
              geliştirmeye odaklanıyorum. Sürekli öğrenmeyi ve yeni
              teknolojileri keşfetmeyi seviyorum.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "React",
                "Next.js",
                "TypeScript",
                ".NET Core",
                "Node.js",
                "SQL",
                "NoSQL",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard
                icon={<TbDeviceDesktop className="w-5 h-5" />}
                title="Web Geliştirme"
                description="Frontend ve backend teknolojileri ile kapsamlı web uygulamaları"
              />
              <InfoCard
                icon={<TbDatabase className="w-5 h-5" />}
                title="Veritabanı Tasarımı"
                description="Verimli ve ölçeklenebilir veritabanı mimarileri"
              />
              <InfoCard
                icon={<TbCode className="w-5 h-5" />}
                title="API Geliştirme"
                description="RESTful ve GraphQL API çözümleri"
              />
              <InfoCard
                icon={<TbBrain className="w-5 h-5" />}
                title="Problem Çözme"
                description="Karmaşık sorunlara etkin ve yaratıcı çözümler"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      name: "Frontend",
      description: "Kullanıcı deneyimi ve arayüz geliştirme",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Vue.js",
      ],
    },
    {
      name: "Backend",
      description: "Sunucu mimarisi ve API tasarımı",
      technologies: [
        ".NET Core",
        "Node.js",
        "Express",
        "RESTful API",
        "GraphQL",
      ],
    },
    {
      name: "Veritabanı",
      description: "Veri yönetimi ve tasarımı",
      technologies: ["SQL Server", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      name: "DevOps & Araçlar",
      description: "Yazılım geliştirme süreçleri",
      technologies: ["Git", "Docker", "CI/CD", "Azure"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Kod Dekorasyonu - Arka Plan */}
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
        {/* Sol Üst - Kod Deseni */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-950/20 dark:to-transparent rounded-3xl opacity-50"></div>
        <div
          className="absolute top-20 left-20 font-mono text-teal-600/30 dark:text-teal-500/20 text-sm whitespace-pre leading-relaxed"
          style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
        >
          {`import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data';`}
        </div>

        {/* Sağ Üst - Kod Deseni */}
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-l from-indigo-50 to-transparent dark:from-indigo-950/20 dark:to-transparent rounded-3xl opacity-50"></div>
        <div className="absolute top-60 right-20 font-mono text-indigo-600/30 dark:text-indigo-500/20 text-sm whitespace-pre leading-relaxed">
          {`function Developer() {
  const [skills, setSkills] = useState([]);
  
  useEffect(() => {
    // Load skills
  }, []);`}
        </div>

        {/* Sol Alt - Kod Deseni */}
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent rounded-3xl opacity-50"></div>
        <div className="absolute bottom-40 left-40 font-mono text-blue-600/30 dark:text-blue-500/20 text-sm whitespace-pre leading-relaxed">
          {`<div className="skill-card">
  {technologies.map((tech) => (
    <TechBadge key={tech} name={tech} />
  ))}
</div>`}
        </div>

        {/* Sağ Alt - Kod Deseni */}
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tl from-purple-50 to-transparent dark:from-purple-950/20 dark:to-transparent rounded-3xl opacity-50"></div>
        <div className="absolute bottom-30 right-40 font-mono text-purple-600/30 dark:text-purple-500/20 text-sm whitespace-pre leading-relaxed">
          {`export default function Skills() {
  return (
    <section>
      <Title>Yeteneklerim</Title>
      <SkillGrid />
    </section>
  );
}`}
        </div>
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <SectionHeader
          title="Yeteneklerim"
          subtitle="Uzmanlaştığım ve sürekli geliştirdiğim teknoloji ekosistemleri"
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(10px)",
                      transition: `all 0.3s ease-out ${
                        categoryIndex * 0.1 + techIndex * 0.05
                      }s`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <TbCode className="w-6 h-6" />,
      title: "Web Geliştirme",
      description:
        "SEO dostu, hızlı ve kullanımı kolay web siteleri ve uygulamalar.",
    },
    {
      icon: <TbDeviceDesktop className="w-6 h-6" />,
      title: "Responsive Tasarım",
      description: "Tüm cihazlarda sorunsuz çalışan kullanıcı arayüzleri.",
    },
    {
      icon: <TbDatabase className="w-6 h-6" />,
      title: "Backend Geliştirme",
      description:
        "Güvenli, ölçeklenebilir ve performansı yüksek backend sistemleri.",
    },
    {
      icon: <TbBrain className="w-6 h-6" />,
      title: "Yazılım Danışmanlığı",
      description: "En uygun teknolojiler ve yöntemler için uzman tavsiyesi.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto max-w-6xl">
        <SectionHeader
          title="Hizmetlerim"
          subtitle="Müşterilerime sunduğum profesyonel çözümler"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 text-teal-500 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Ticaret Platformu",
      description:
        "Modern ve kullanıcı dostu bir alışveriş deneyimi sunan e-ticaret web uygulaması.",
      image: "https://avatars.githubusercontent.com/u/30194127",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Sistemi",
      description:
        "SEO odaklı, hızlı ve kullanımı kolay bir içerik yönetim sistemi.",
      image: "https://avatars.githubusercontent.com/u/30194127",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Proje Yönetim Uygulaması",
      description:
        "Ekiplerin iş akışını ve görevleri takip edebilecekleri kapsamlı yönetim aracı.",
      image: "https://avatars.githubusercontent.com/u/30194127",
      tags: [".NET Core", "React", "SQL Server"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 mx-auto max-w-6xl">
        <SectionHeader
          title="Projelerim"
          subtitle="En son tamamladığım bazı çalışmalar"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 font-medium text-sm"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 font-medium text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
          >
            Tüm Projeleri Gör
            <TbArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Contact CTA Section
const ContactCTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projelerinizi Hayata Geçirelim
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Fikirlerinizi dijital dünyaya taşımak veya mevcut projelerinizi
            geliştirmek için benimle iletişime geçin. Modern teknolojilerle,
            ihtiyaçlarınıza özel çözümler sunuyorum.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors"
          >
            İletişime Geç
            <TbArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Ortak Bileşenler
const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
      {title}
    </h2>
    <div className="h-1 w-16 bg-teal-500 mx-auto rounded-full mb-4"></div>
    <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
  </div>
);

const InfoCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
    <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/30 text-teal-500 rounded-lg flex items-center justify-center mb-3">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default HomeContainer;
