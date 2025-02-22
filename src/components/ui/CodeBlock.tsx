import React from "react";

interface CodeBlockProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export default function CodeBlock({
  title,
  description,
  technologies,
  link,
}: CodeBlockProps) {
  return (
    <div className="bg-editor-line rounded-lg p-4 sm:p-6 hover:border-editor-variable border border-transparent transition-all">
      <div className="mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold">
          <span className="text-editor-keyword">const</span>{" "}
          <span className="text-editor-variable">{title}</span>{" "}
          <span className="text-editor-keyword">=</span>{" "}
          <span className="text-editor-function">{"{"}</span>
        </h3>
      </div>

      <div className="pl-3 sm:pl-4">
        <p className="mb-2 text-sm sm:text-base">
          <span className="text-editor-variable">description:</span>{" "}
          <span className="text-editor-string">"{description}"</span>,
        </p>

        <p className="mb-2 text-sm sm:text-base break-words">
          <span className="text-editor-variable">technologies:</span>{" "}
          <span className="text-editor-function">[</span>
          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="text-editor-string">"{tech}"</span>
              {index < technologies.length - 1 && ", "}
            </React.Fragment>
          ))}
          <span className="text-editor-function">]</span>,
        </p>

        <p className="text-sm sm:text-base break-all">
          <span className="text-editor-variable">link:</span>{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-editor-string hover:text-editor-function"
          >
            "{link}"
          </a>
          ;
        </p>
      </div>

      <div className="mt-2 text-editor-function">{"}"}</div>
    </div>
  );
}
