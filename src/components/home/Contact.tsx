export default function Contact() {
  return (
    <section className="py-6 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
        <span className="text-editor-keyword">async function</span>{" "}
        <span className="text-editor-function">contact</span>() {"{"}
      </h2>

      <div className="pl-3 sm:pl-4 space-y-3 sm:space-y-4 text-sm sm:text-base">
        <div className="flex items-center flex-wrap">
          <span className="text-editor-keyword mr-2">const</span>
          <span className="text-editor-variable mr-2">email </span>
          <span className="text-editor-keyword mr-2">=</span>{" "}
          <a
            href="mailto:emrahatalay92@gmail.com"
            className="text-editor-string hover:text-editor-function break-all"
          >
            &quot;emrahatalay92@gmail.com&quot;
          </a>
          ;
        </div>

        <div className="flex items-center flex-wrap">
          <span className="text-editor-keyword mr-2">const</span>
          <span className="text-editor-variable mr-2">github</span>
          <span className="text-editor-keyword mr-2">=</span>
          <a
            href="https://github.com/eatalay13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-editor-string hover:text-editor-function break-all"
          >
            &quot;github.com/eatalay13&quot;
          </a>
          ;
        </div>

        <div className="flex items-center flex-wrap">
          <span className="text-editor-keyword mr-2">const</span>
          <span className="text-editor-variable mr-2">linkedin</span>
          <span className="text-editor-keyword mr-2">=</span>
          <a
            href="https://linkedin.com/in/emrahatalay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-editor-string hover:text-editor-function break-all"
          >
            &quot;linkedin.com/in/emrahatalay&quot;
          </a>
          ;
        </div>
      </div>

      <div className="mt-4 text-editor-text">{"}"}</div>
    </section>
  );
}
