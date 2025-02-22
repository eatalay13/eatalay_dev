import { projects } from "@/lib/constants/projects";
import CodeBlock from "../ui/CodeBlock";

export default function Projects() {
  return (
    <section className="py-6 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
        <span className="text-editor-keyword">function</span>{" "}
        <span className="text-editor-function">getProjects</span>() {"{"}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project) => (
          <CodeBlock
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>

      <div className="mt-4 text-editor-text">{"}"}</div>
    </section>
  );
}
