import * as GenerateElement from "./GeneratePageElement.js";
import Storage from "./Storage.js";
import Task from "./Task.js";
import List from "./List.js";
import Project from "./Project.js";
import User from "./User.js";

export default class UI {
    //Initialize page body, nav container, and content container page elements to be later populated
    constructor(thisUser, thisStorage) {
        /* const newStorage = new Storage(); */
        /* this.newStorage = new Storage();
        this.userList = this.newStorage.getUsers(); */

        //Refactor this to take in a single user and generate UI
        this.newStorage = thisStorage;
        this.user = thisUser;

        /* this.user = this.userList[0]; */
        //console.log(this.user);
        this.pageBody = document.querySelector("body");
        this.navContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-container"],
            document.querySelector("body")
        );
        this.pageBody.appendChild(this.navContainer);

        this.contentContainer = GenerateElement.generatePageElement(
            "div",
            ["content-container"],
            document.querySelector("body")
        );
        this.pageBody.appendChild(this.contentContainer);

        if (this.user.projects.length !== 0) {
            this.loadPageContent(this.user.projects[0].name);
        } else {
            this.loadPageContent();
        }
        /* this.loadPageContent(this.user.name); */
    }

    //Clears and populates nav and display panes
    loadPageContent(nameOfProjectToLoad = "") {
        this.reloadNavContent();

        this.clearDisplayContent();
        //In case there isn't a project to load....
        if (nameOfProjectToLoad != "") {
            this.fillDisplayPaneContent(nameOfProjectToLoad);
        }
    }

    clearNavContent() {
        this.navContainer.replaceChildren();
    }

    reloadNavContent() {
        this.clearNavContent();
        this.fillNavContent();
    }

    clearDisplayContent() {
        this.contentContainer.replaceChildren();
    }

    fillNavContent() {
        const navInfoContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-info-container"],
            this.navContainer
        );

        const navTitleContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-title-container"],
            navInfoContainer
        );

        const navControlContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-control-container"],
            navInfoContainer
        );

        const navTitle = GenerateElement.generatePageElement(
            "div",
            ["nav-title"],
            navTitleContainer,
            "My Projects"
        );

        const addNewProjectButton = GenerateElement.generatePageElement(
            "div",
            ["nav-new-project-button", "button"],
            navControlContainer,
            "add project"
        );
        addNewProjectButton.addEventListener("click", () => {
            this.createNewProject();
            this.reloadNavContent();
        });

        const saveButton = GenerateElement.generatePageElement(
            "div",
            ["nav-save-users-button", "button"],
            navControlContainer,
            "save all"
        );
        saveButton.addEventListener("click", () => {
            console.log("blamo!");
            this.newStorage.simpleSendToStorage(this.user);
        });

        const exitToLoginButton = GenerateElement.generatePageElement(
            "div",
            ["nav-exit-button", "button"],
            navControlContainer,
            "exit"
        );

        const navContentContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-content-container"],
            this.navContainer
        );

        this.populateNavContent(navContentContainer, this.user.projects);

        this.navContainer.appendChild(navContentContainer);
    }

    populateNavContent(navContentContainer, projects) {
        projects.forEach((project) => {
            navContentContainer.appendChild(
                this.createProjectNavVisual(project)
            );
        });
    }

    createProjectNavVisual(project) {
        const projectContainer = GenerateElement.generatePageElement("div", [
            "nav-project-container",
        ]);

        const projectTitleContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-project-title-container"],
            projectContainer
        );

        const projectTitleIcon = GenerateElement.generatePageElement(
            "div",
            ["nav-project-title-icon"],
            projectTitleContainer
        );

        const projectTitle = GenerateElement.generatePageElement(
            "div",
            ["nav-project-title", "button"],
            projectTitleContainer,
            project.name
        );
        projectTitle.addEventListener("click", () => {
            this.clearDisplayContent();
            this.fillDisplayPaneContent(`${project.name}`);
        });

        const projectContentContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-project-content-container"],
            projectContainer
        );

        project.lists.forEach((list) => {
            projectContentContainer.appendChild(this.createListNavVisual(list));
        });

        /* project.setContainerNode(projectContainer); */

        return projectContainer;
    }

    createListNavVisual(list) {
        const listTitleContainer = GenerateElement.generatePageElement("div", [
            "nav-list-title-container",
        ]);

        const listTitleIcon = GenerateElement.generatePageElement(
            "div",
            ["nav-list-title-icon"],
            listTitleContainer
        );

        const listTitleDiv = GenerateElement.generatePageElement(
            "div",
            ["nav-list-title"],
            listTitleContainer,
            list.name
        );

        return listTitleContainer;
    }

    //Checks that a project by that name exists and then sends that project name on to be added to the workspace
    fillDisplayPaneContent(projectName = "default") {
        if (!this.user.containsProject(projectName)) {
            return;
        }
        const projectContainer = GenerateElement.generatePageElement("div", [
            "project-container",
        ]);

        this.createProjectVisual(
            this.user.getProject(projectName),
            projectContainer
        );
        this.contentContainer.appendChild(projectContainer);
    }

    createProjectVisual(project, projectContainer) {
        const projectTitleContainer = GenerateElement.generatePageElement(
            "div",
            ["project-title-container"],
            projectContainer
        );

        const projectInfoContainer = GenerateElement.generatePageElement(
            "div",
            ["project-info-container"],
            projectTitleContainer
        );

        const projectControlContainer = GenerateElement.generatePageElement(
            "div",
            ["project-control-container"],
            projectTitleContainer
        );

        const projectCardContainer = GenerateElement.generatePageElement(
            "div",
            ["project-card-container"],
            projectContainer
        );

        const projectName = GenerateElement.generatePageElement(
            "div",
            ["project-title"],
            projectInfoContainer,
            project.name
        );

        const projectDescription = GenerateElement.generatePageElement(
            "div",
            ["project-description"],
            projectInfoContainer,
            project.description
        );

        const createNewListButton = GenerateElement.generatePageElement(
            "div",
            ["new-project-list-button", "button"],
            projectControlContainer,
            "new list"
        );
        createNewListButton.addEventListener("click", () => {
            const newList = this.createList(project);
            this.updateProjectVisual(project);
            this.reloadNavContent();
        });

        const closeProjectButton = GenerateElement.generatePageElement(
            "div",
            ["close-project-button", "button"],
            projectControlContainer,
            "close project"
        );
        closeProjectButton.addEventListener("click", () => {
            this.clearDisplayContent();
        });

        const deleteProjectButton = GenerateElement.generatePageElement(
            "div",
            ["item-remove-button", "button"],
            projectControlContainer,
            "delete project"
        );
        deleteProjectButton.addEventListener("click", () => {
            project.parentObject.removeProject(project.name);
            this.loadPageContent();
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        const editProjectButton = GenerateElement.generatePageElement(
            "div",
            ["project-edit-button", "button"],
            projectControlContainer,
            "edit project"
        );
        editProjectButton.addEventListener("click", () => {
            this.editProject(project);
            this.updateProjectVisual(project);
        });

        this.appendAllListsToProject(projectCardContainer, project.lists);

        project.setContainerNode(projectContainer);

        /* this.contentContainer.appendChild(projectContainer); */
    }

    appendAllListsToProject(projectContainer, lists) {
        lists.forEach((list) => {
            this.appendList(list, projectContainer);
        });
    }

    appendList(list, projectContainer) {
        const listContainer = GenerateElement.generatePageElement("div", [
            "list-container",
        ]);
        this.createListVisual(list, listContainer);
        projectContainer.appendChild(listContainer);
    }

    createListVisual(list, listContainer) {
        const listTitleContainer = GenerateElement.generatePageElement(
            "div",
            ["list-title-container"],
            listContainer
        );

        const listInfoContainer = GenerateElement.generatePageElement(
            "div",
            ["list-info-container"],
            listTitleContainer
        );

        const listControlContainer = GenerateElement.generatePageElement(
            "div",
            ["list-control-container"],
            listTitleContainer
        );

        const listCardContainer = GenerateElement.generatePageElement(
            "div",
            ["list-card-container"],
            listContainer
        );

        const listName = GenerateElement.generatePageElement(
            "div",
            ["list-title"],
            listInfoContainer,
            list.name
        );

        const listDescription = GenerateElement.generatePageElement(
            "div",
            ["list-description"],
            listInfoContainer,
            list.description
        );

        const addNewTaskButton = GenerateElement.generatePageElement(
            "div",
            ["new-list-item-button", "button"],
            listControlContainer,
            "new task"
        );
        addNewTaskButton.addEventListener("click", () => {
            const newTask = this.createTask(list);
            this.updateListVisual(list);
        });

        const removeListButton = GenerateElement.generatePageElement(
            "div",
            ["item-remove-button", "button"],
            listControlContainer,
            "delete list"
        );
        removeListButton.addEventListener("click", () => {
            list.parentObject.removeList(list.name);
            this.updateProjectVisual(list.parentObject);
            this.reloadNavContent();

            //TODO: this also needs to update the json file of record to save page state on reload
        });

        const editListButton = GenerateElement.generatePageElement(
            "div",
            ["list-edit-button", "button"],
            listControlContainer,
            "edit list"
        );
        editListButton.addEventListener("click", () => {
            this.editList(list);
            this.updateListVisual(list);
        });

        this.appendTaskList(listContainer, list);
        list.setContainerNode(listContainer);
        //Does this (need to return?) list container
        return listContainer;
    }

    appendTaskList(listContainer, list) {
        list.tasks.forEach((task) => {
            this.appendTask(task, listContainer);
        });
    }

    appendTask(task, listContainer) {
        const taskContainer = GenerateElement.generatePageElement("div", [
            "item-container",
        ]);
        this.createTaskVisual(task, taskContainer);
        listContainer.appendChild(taskContainer);
    }

    //Checkbox needs to save state between loads
    createTaskVisual(task, taskContainer) {
        const checkboxContainer = GenerateElement.generatePageElement(
            "div",
            ["item-checkbox-container"],
            taskContainer
        );
        const checkbox = GenerateElement.generatePageElement(
            "input",
            ["item-checkbox"],
            checkboxContainer
        );
        checkbox.type = "checkbox";
        /* console.log(`Task name? ${task.name} Task checked? ${task.checked}`); */
        if (task.checked == true) {
            checkbox.checked = true;
        }
        checkbox.addEventListener("click", () => {
            if (task.checked) {
                task.checked = false;
            } else {
                task.checked = true;
            }
        });

        const infoContainer = GenerateElement.generatePageElement(
            "div",
            ["item-info-container"],
            taskContainer
        );

        const itemTitle = GenerateElement.generatePageElement(
            "div",
            ["item-title"],
            infoContainer,
            task.name
        );

        const itemDescription = GenerateElement.generatePageElement(
            "div",
            ["item-description"],
            infoContainer,
            task.description
        );

        const itemDueDate = GenerateElement.generatePageElement(
            "div",
            ["item-due-date"],
            infoContainer,
            task.dueDate
        );

        const taskControlsContainer = GenerateElement.generatePageElement(
            "div",
            ["task-controls-container"],
            taskContainer
        );

        const removeTaskButton = GenerateElement.generatePageElement(
            "div",
            ["item-remove-button", "button"],
            taskControlsContainer,
            "remove item"
        );
        removeTaskButton.addEventListener("click", () => {
            task.parentObject.removeTask(task.name);
            this.updateListVisual(task.parentObject);
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        const editTaskButton = GenerateElement.generatePageElement(
            "div",
            ["item-edit-button", "button"],
            taskControlsContainer,
            "edit item"
        );
        editTaskButton.addEventListener("click", () => {
            this.editTask(task);
            this.updateTaskVisual(task);
        });

        task.setContainerNode(taskContainer);
        return taskContainer;
    }

    createTask(parentList) {
        const taskName = prompt("Item name?");
        const taskDescription = prompt("Item description?");
        const taskDueDate = prompt("Item due date?");

        const newTask = new Task(
            taskName,
            taskDescription,
            taskDueDate,
            parentList
        );

        parentList.addTask(newTask);
    }

    editTask(task) {
        const taskName = prompt("New task name?", `${task.name}`);
        const taskDescription = prompt(
            "New task description?",
            `${task.description}`
        );
        const taskDueDate = prompt("New task due date?", `${task.dueDate}`);

        task.setName(taskName);
        task.setDate(taskDueDate);
        task.setDescription(taskDescription);
    }

    updateTaskVisual(task) {
        this.clearTaskVisual(task.containerNode);
        this.createTaskVisual(task, task.containerNode);
    }

    clearTaskVisual(taskVisual) {
        taskVisual.replaceChildren();
    }

    createList(parentProject) {
        const listName = prompt("List name?");
        const listDescription = prompt("List description?");
        const newList = new List(listName, listDescription, [], parentProject);

        parentProject.addList(newList);
    }

    editList(list) {
        const listName = prompt("List name?", list.name);
        const listDescription = prompt("List description?", list.description);

        list.name = listName;
        list.description = listDescription;
    }

    updateListVisual(list) {
        this.clearListVisual(list.containerNode);
        this.createListVisual(list, list.containerNode);
    }

    clearListVisual(listVisual) {
        listVisual.replaceChildren();
    }

    editProject(project) {
        const projectName = prompt("Project name?", project.name);
        const projectDescription = prompt(
            "Project description?",
            project.description
        );

        project.name = projectName;
        project.description = projectDescription;
    }

    updateProjectVisual(project) {
        this.clearProjectVisual(project.containerNode);
        this.createProjectVisual(project, project.containerNode);
    }

    clearProjectVisual(projectVisual) {
        projectVisual.replaceChildren();
    }

    createNewProject() {
        const newProjectName = prompt("Project name?");
        const newProjectDescription = prompt("Project description?");
        const newProjectLists = [];

        const newProject = new Project(
            newProjectName,
            newProjectDescription,
            newProjectLists,
            this.user
        );

        this.user.addProject(newProject);
    }
}
