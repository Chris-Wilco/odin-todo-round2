import * as Project from "./Project.js";

export default class User {
    constructor(name, projects = []) {
        this.name = name;
        this.projects = projects;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getProjects() {
        return this.projects;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    addProject() {
        const projectName = prompt("Project name?");
        const projectDescription = prompt("Project description?");
        const newProject = new Project(projectName, projectDescription);
        projects.push(newProject);
    }
}

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
            project.updateNavContainer(navContainer);
        });
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
        projects.forEach((project) => {
            project.updateContentContainer(contentContainer);
        });
    }

    return { projects, addProject, updateNavContainer, updateContentContainer };
}
