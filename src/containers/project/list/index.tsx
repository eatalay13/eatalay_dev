import { Project } from "@prisma/client";

interface ProjectListContainerProps {
  projects: Project[];
}

function ProjectListContainer(props: ProjectListContainerProps) {
  return (
    <div>
      {props.projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}

export default ProjectListContainer;
