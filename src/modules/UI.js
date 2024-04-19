import * as GenerateElement from "./GeneratePageElement.js";
import Storage from "./Storage.js";
import Task from "./Task.js";
import List from "./List.js";
import Project from "./Project.js";
import User from "./User.js";

export default class UI {
    //Initialize page body, nav container, and content container page elements to be later populated
    constructor() {
        const newStorage = new Storage();
        const userList = newStorage.getUsers();

        this.user = userList[0];
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

        this.loadPageContent();
    }

    //Clears and populates nav and display panes
    loadPageContent() {
        this.clearNavContent();
        this.fillNavContent();
        this.clearDisplayContent();
        console.log(this.user.projects[0]);
        /* this.fillDisplayPaneContent(this.user.projects[0]); */
        this.fillDisplayPaneContent("project 1");
    }

    clearNavContent() {
        this.navContainer.replaceChildren();
        /* GenerateElement.clearNodeContent(this.navContainer); */
    }

    clearDisplayContent() {
        this.contentContainer.replaceChildren();
        /* GenerateElement.clearNodeContent(this.contentContainer); */
    }

    fillNavContent() {
        const navTitleContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-title-container"],
            this.navContainer
        );

        const navTitle = GenerateElement.generatePageElement(
            "div",
            ["nav-title"],
            navTitleContainer,
            "My Projects"
        );

        const addNewProjectButton = GenerateElement.generatePageElement(
            "div",
            ["new-project-button"],
            navTitleContainer
        );
        //TODO: This actually needs to add a new project to the nav and the workspace
        addNewProjectButton.addEventListener("click", () => {
            user.addProject();
            console.log(user.projects);
            resetNavContainer();
        });

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
            ["nav-project-title"],
            projectTitleContainer,
            project.name
        );

        //TODO: Each project listed in the nav needs to be able to open itself in the main content space

        const projectContentContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-project-content-container"],
            projectContainer
        );

        project.lists.forEach((list) => {
            projectContentContainer.appendChild(this.createListNavVisual(list));
        });

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
        this.createProjectVisual(this.user.getProject(projectName));
    }

    createProjectVisual(project) {
        const projectContainer = GenerateElement.generatePageElement("div", [
            "project-container",
        ]);

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
            ["new-project-list-button"],
            projectTitleContainer
        );

        createNewListButton.addEventListener("click", () => {
            //TODO: Make this button create a new list, add it to the project, and then reload nav and page content to reflect this change
        });

        const removeProjectButton = GenerateElement.generatePageElement(
            "div",
            ["item-remove-button"],
            projectContainer,
            "delete project"
        );
        removeProjectButton.addEventListener("click", () => {
            /* projectContainer.remove(); */
            //TODO: link this to also remove the nav bar representation of this list
            project.parentUser.removeProject(project.name);
            this.loadPageContent();
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        this.appendAllListsToProject(projectContainer, project.lists);

        this.contentContainer.appendChild(projectContainer);
    }

    appendAllListsToProject(projectContainer, lists) {
        lists.forEach((list) => {
            projectContainer.appendChild(this.createListVisual(list));
            //TODO: Make this append the visual for each list contained in this project to the workspace. => I think it does this now.
        });
    }

    createListVisual(list) {
        const listContainer = GenerateElement.generatePageElement("div", [
            "list-container",
        ]);

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

        const addNewItemButton = GenerateElement.generatePageElement(
            "div",
            ["new-list-item-button"],
            listTitleContainer
        );
        addNewItemButton.addEventListener("click", () => {
            const taskName = prompt("Item name?");
            const taskDescription = prompt("Item description?");
            const taskDueDate = prompt("Item due date?");

            const newTask = new Task(taskName, taskDescription, taskDueDate);
            list.addTask(newTask);
            this.loadPageContent();
        });

        const removeListButton = GenerateElement.generatePageElement(
            "div",
            ["item-remove-button"],
            listContainer,
            "delete list"
        );
        removeListButton.addEventListener("click", () => {
            //TODO: Reload just the content in the containing UI node?
            list.parentProject.removeList(list.name);
            this.loadPageContent();
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        this.appendWholeItemList(listContainer, list);

        return listContainer;
    }

    appendWholeItemList(listContainer, list) {
        list.tasks.forEach((task) => {
            const taskContainer = GenerateElement.generatePageElement("div", [
                "item-container",
            ]);
            this.createTaskVisual(task, taskContainer);
            listContainer.appendChild(taskContainer);

            /* listContainer.appendChild(this.createTaskVisual(task)); */
            /* listContainer.appendChild(item.itemVisual); */
            //TODO: Have this append the DOM element created for each task => I think it does this now
        });
    }

    createTaskVisual(task, taskContainer) {
        /* const taskContainer = GenerateElement.generatePageElement("div", [
            "item-container",
        ]); */

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

        const removeItemButton = GenerateElement.generatePageElement(
            "div",
            ["item-remove-button"],
            taskContainer,
            "remove item"
        );
        removeItemButton.addEventListener("click", () => {
            //Can I just repopulate the div that contains this list?
            //Just gonna make it regenerate the entire page for now....
            task.parentList.removeTask(task.name);
            this.loadPageContent();
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        return taskContainer;
    }
}

//clear page content

//clear nav

//clear content window

//refresh page content

//refresh nav

//refresh content window

//
