import { skills } from "@/lib/constants/skills";

export default function Skills() {
  return (
    <section className="py-6 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
        <span className="text-editor-keyword">interface</span>{" "}
        <span className="text-editor-function">DeveloperSkills</span> {"{"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-3 sm:pl-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-4 sm:mb-6">
            <h3 className="text-editor-variable mb-2 text-sm sm:text-base">
              {category}:
            </h3>
            <div className="pl-3 sm:pl-4">
              {items.map((skill, index) => (
                <div
                  key={index}
                  className="text-editor-text text-sm sm:text-base"
                >
                  <span className="text-editor-comment">{"// "}</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-editor-text">{"}"}</div>
    </section>
  );
}
