"use client";

import { Project } from "types/types";

interface Props {
    project: Project;
    onClick: (project: Project) => void;
}

export default function ProjectCard(props: Props): JSX.Element {
    let { project, onClick: changeActiveProject } = props;

    let activeStyle = {
        background: "",
        backgroundSize: "auto 100%",
    };

    let normalStyle = {
        background: "",
        backgroundSize: "auto 120%",
        backgroundPosition: "center",
    };

    let _style = project.isActive ? activeStyle : normalStyle;
    _style.background = "url(" + project.image + ")";
    return (
        <div className={"option " + (project.isActive ? "active" : "")}
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
    );
}