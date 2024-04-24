export default class User {
    constructor(name, projects = [], parentContainer) {
        this.name = name;
        this.projects = projects;
        this.parentContainer = parentContainer;
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

    parseToJSON() {
        const JSONProjectArray = [];
        this.projects.forEach((project) => {
            JSONProjectArray.push(project.parseToJSON());
        });

        const userJSON = `{"name": "${this.name}", "projects": ${JSONProjectArray}}`;
        let tempString = "" + userJSON;

        return tempString;
    }
}
