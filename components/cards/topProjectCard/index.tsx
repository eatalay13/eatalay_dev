"use client";

import { useState } from "react";
import { Project } from "types/types";
import ProjectCard from "../projectCard";

interface Props {
    projects: Project[];
}

function TopProjectCardList(props: Props): JSX.Element {
    let [projects, setProjects] = useState<Project[]>(props.projects);

    function changeActiveProject(project: Project) {
        let currentActiveProject = projects.find((project) => project.isActive);

        if (currentActiveProject)
            currentActiveProject.isActive = false;

        projects[projects.indexOf(project)].isActive = true;

        setProjects([...projects]);
    }

    return (
        <div className="options">
            {projects.map((project, index) =>
                <ProjectCard key={index} project={project} onClick={changeActiveProject} />
            )}
        </div>
    );
}

export default TopProjectCardList;