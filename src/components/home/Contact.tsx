export default function Contact() {
  return (
    <section className="py-6 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
        <span className="text-editor-keyword">async function</span>{" "}
        <span className="text-editor-function">contact</span>() {"{"}
      </h2>

      <div className="pl-3 sm:pl-4 space-y-3 sm:space-y-4 text-sm sm:text-base">
        <div className="flex items-center flex-wrap">
          <span className="text-editor-keyword">const</span>{" "}
          <span className="text-editor-variable">email</span>{" "}
          <span className="text-editor-keyword">=</span>{" "}
          <a
            href="mailto:emrahatalay92@gmail.com"
            className="text-editor-string hover:text-editor-function break-all"
          >
            "emrahatalay92@gmail.com"
          </a>
          ;
        </div>

        <div className="flex items-center flex-wrap">
          <span className="text-editor-keyword">const</span>{" "}
          <span className="text-editor-variable">github</span>{" "}
          <span className="text-editor-keyword">=</span>{" "}
          <a
            href="https://github.com/eatalay13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-editor-string hover:text-editor-function break-all"
          >
            "github.com/eatalay13"
          </a>
          ;
        </div>

        <div className="flex items-center flex-wrap">
          <span className="text-editor-keyword">const</span>{" "}
          <span className="text-editor-variable">linkedin</span>{" "}
          <span className="text-editor-keyword">=</span>{" "}
          <a
            href="https://linkedin.com/in/emrahatalay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-editor-string hover:text-editor-function break-all"
          >
            "linkedin.com/in/emrahatalay"
          </a>
          ;
        </div>
      </div>

      <div className="mt-4 text-editor-text">{"}"}</div>
    </section>
  );
}
