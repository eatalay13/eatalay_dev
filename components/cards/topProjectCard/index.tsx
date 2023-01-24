"use client";

import { useState } from "react";
import { Project } from "types/types";

interface Props {
    projects: Project[];
}

export default function TopProjectCardList(props: Props): JSX.Element {
    let [projects, setProjects] = useState<Project[]>(props.projects);

    function changeActiveProject(project: Project) {
        let currentActiveProject = projects.find((project) => project.isActive);

        if (currentActiveProject)
            currentActiveProject.isActive = false;

        projects[projects.indexOf(project)].isActive = true;

        setProjects([...projects]);
    }

    let activeStyle = {
        background: "",
        backgroundSize: "auto 100%",
    };

    let normalStyle = {
        background: "",
        backgroundSize: "auto 120%",
        backgroundPosition: "center",
    };

    return (
        <div className="options">
            {projects.map((project, index) => {
                let _style = project.isActive ? activeStyle : normalStyle;
                _style.background = "url(" + project.image + ")";
                return (
                    <div key={index} className={"option " + (project.isActive ? "active" : "")}
                        style={_style} onClick={() => changeActiveProject(project)}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                                <i className={project.icon}></i>
                            </div>
                            <div className="info">
                                <div className="main">{project.name}</div>
                                <div className="sub">{project.description}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
