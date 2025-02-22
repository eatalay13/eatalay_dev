import ConsoleText from "../ui/ConsoleText";

export default function Hero() {
  return (
    <section className="py-6 sm:py-12">
      <ConsoleText prefix="visitor@portfolio:~$" delay={50}>
        eatalay_dev
      </ConsoleText>

      <div className="mt-4 text-editor-text">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
          <span className="text-editor-keyword">const</span>{" "}
          <span className="text-editor-variable">developer</span>{" "}
          <span className="text-editor-keyword">=</span>{" "}
          <span className="text-editor-string">&quot;Emrah Atalay&quot;</span>;
        </h1>

        <p className="text-editor-comment mb-4 text-sm sm:text-base">
          {"// Fullstack Developer"}
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          Modern web teknolojileri ile kullanıcı dostu ve ölçeklenebilir
          uygulamalar geliştiriyorum. Clean code ve best practice&apos;leri
          takip ederek sürdürülebilir çözümler üretiyorum.
        </p>
      </div>
    </section>
  );
}
