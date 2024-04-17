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

    containsProject(projectName) {
        return this.projects.some(
            (project) => project.getName() === projectName
        );
    }

    addProject(newProject) {
        if (!this.containsProject(newProject.getName())) {
            this.projects.push(newProject);
        }
    }

    removeProject(projectName) {
        this.projects = this.projects.filter(
            (project) => project.getName() !== projectName
        );
    }

    getProject(projectName) {
        return this.projects.find(
            (project) => project.getName() === projectName
        );
    }

    /* addProject() {
        const projectName = prompt("Project name?");
        const projectDescription = prompt("Project description?");
        const newProject = new Project(projectName, projectDescription);
        projects.push(newProject);
    } */
}
