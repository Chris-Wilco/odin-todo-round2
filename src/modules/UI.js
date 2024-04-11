import * as GenerateElement from "./GeneratePageElement.js";

export default class UI {
    //Initialize page body, nav container, and content container page elements to be later populated
    constructor(user) {
        this.user = user;
        this.pageBody = document.querySelector("body");
        this.navContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-container"],
            document.querySelector("body")
        );
        pageBody.appendChild(navContainer);

        this.contentContainer = GenerateElement.generatePageElement(
            "div",
            ["content-container"],
            document.querySelector("body")
        );
        pageBody.appendChild(contentContainer);

        UI.loadPageContent();
    }

    //Clears and populates nav and display panes
    static loadPageContent() {
        UI.clearNavContent();
        UI.fillNavContent();
        UI.clearDisplayContent();
        UI.fillDisplayPaneContent();
    }

    static clearNavContent() {
        GenerateElement.clearNodeContent(navContainer);
    }

    static clearDisplayContent() {
        GenerateElement.clearNodeContent(contentContainer);
    }

    static fillNavContent() {
        const navTitleContainer = GenerateElement.generatePageElement(
            "div",
            ["nav-title-container"],
            navContainer
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
            navContainer
        );

        UI.populateNavContent(navContentContainer, user.projects);

        navContainer.appendChild(navContentContainer);
    }

    static populateNavContent(navContentContainer, projects) {
        projects.forEach((project) => {
            navContentContainer.appendChild(createProjectNavVisual(project));
        });
    }

    static createProjectNavVisual(project) {
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
            projectContentContainer.appendChild(createListNavVisual(list));
        });

        return projectContainer;
    }

    static createListNavVisual(list) {
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
    static fillDisplayPaneContent(projectName = "default") {
        if (!user.containsProject(projectName)) {
            return;
        }
        this.createProjectVisual(user.getProject(projectName));
    }

    static createProjectVisual(project) {
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
            projectContainer.remove();
            //TODO: link this to also remove the nav bar representation of this list
        });

        appendAllListsToProject(projectContainer, project.lists);

        contentContainer.appendChild(projectContainer);
    }

    static appendAllListsToProject(projectContainer, lists) {
        lists.forEach((list) => {
            projectContainer.appendChild(this.createListVisual(list));
            //TODO: Make this append the visual for each list contained in this project to the workspace. => I think it does this now.
        });
    }

    static createListVisual(list) {
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
            /* const newItem = addListItem();
            listContainer.appendChild(newItem.itemVisual); */
            //TODO: Have this generate a new task, append that task to the list items, then reload the list visual to reflect this change
        });

        const removeListButton = GenerateElement.generatePageElement(
            "div",
            ["item-remove-button"],
            listContainer,
            "delete list"
        );
        removeListButton.addEventListener("click", () => {
            listContainer.remove();
            //TODO: link this to also remove the nav bar representation of this list
        });

        appendWholeItemList(listContainer, list);

        return listContainer;
    }

    appendWholeItemList(listContainer, list) {
        list.tasks.forEach((task) => {
            listContainer.appendChild(this.createTaskVisual(task));
            /* listContainer.appendChild(item.itemVisual); */
            //TODO: Have this append the DOM element created for each task => I think it does this now
        });
    }

    createTaskVisual(task) {
        const taskContainer = GenerateElement.generatePageElement("div", [
            "item-container",
        ]);

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
            taskContainer.remove();
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
