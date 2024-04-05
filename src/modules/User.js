import * as Project from "./Project.js";

export function createUser(projects = []) {
    function addProject() {
        const projectName = prompt("Project name?");
        const projectDescription = prompt("Project description?");
        const newProject = Project.createProject(
            projectName,
            projectDescription
        );
        projects.push(newProject);
        return newProject;
    }

    let contentContainer;
    let navContainer;

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
        projects.forEach((project) => {
            project.updateNavContainer(newNavContainer);
        });
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
        projects.forEach((project) => {
            project.updateContentContainer(newContentContainer);
        });
    }

    return { projects, addProject, updateNavContainer, updateContentContainer };
}
