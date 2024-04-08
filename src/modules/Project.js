/* export class Project {
    constructor(name) {
        this.name = name;
        this.projectTasks = [];
    }

    getName() {
        return this.name;
    }
}
 */

import * as List from "./List.js";

//TODO: Do i need a project container for holding and creating new projects?
//Probably... A User module? Probably...

export function createProject(title, description, lists = []) {
    function addList() {
        const listName = prompt("Item name?");
        const listDescription = prompt("Item description?");
        const newList = List.createList(listName, listDescription);
        lists.push(newList);
        return newList;
    }

    //gonna to change projectVisual to a let and see if I can update it.
    let projectVisual = createProjectVisual(
        title,
        description,
        lists,
        addList,
        reloadNavContainer,
        reloadContentContainer
    );

    const projectNavVisual = createProjectNavVisual(
        title,
        lists,
        reloadNavContainer,
        reloadContentContainer
    );

    let contentContainer;
    let navContainer;

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
        lists.forEach((list) => {
            list.updateNavContainer(newNavContainer);
        });
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
        lists.forEach((list) => {
            list.updateContentContainer(newContentContainer);
        });
    }

    function reloadContentContainer() {
        projectVisual = createProjectVisual(
            title,
            description,
            lists,
            addList,
            reloadNavContainer,
            reloadContentContainer
        );
        contentContainer.resetContentContainer();
    }

    function reloadNavContainer() {
        navContainer.resetNavContainer();
    }

    return {
        title,
        description,
        lists,
        projectVisual,
        projectNavVisual,
        updateNavContainer,
        updateContentContainer,
    };
}

import * as GenerateElement from "./GeneratePageElement.js";

export function createProjectVisual(
    title,
    description,
    lists,
    addList,
    reloadNavContainer,
    reloadContentContainer
) {
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

    const projectTitle = GenerateElement.generatePageElement(
        "div",
        ["project-title"],
        projectInfoContainer,
        title
    );
    const projectDescription = GenerateElement.generatePageElement(
        "div",
        ["project-description"],
        projectInfoContainer,
        description
    );

    const createNewListButton = GenerateElement.generatePageElement(
        "div",
        ["new-project-list-button"],
        projectTitleContainer
    );

    createNewListButton.addEventListener("click", () => {
        const newList = addList();
        reloadContentContainer();
        //projectContainer.appendChild(newList.listVisual);

        /* GeneratePage.resetPage(); */

        //TODO: add event for creating a new list div and accompanying list
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

    appendAllListsToProject(projectContainer, lists);

    return projectContainer;
}

function appendAllListsToProject(projectContainer, lists) {
    lists.forEach((list) => {
        projectContainer.appendChild(list.listVisual);
    });
}

export function createProjectNavVisual(
    title,
    lists,
    navContainer,
    contentContainer
) {
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
        title
    );

    //TODO: Each project needs to be able to open itself in the main content space

    const projectContentContainer = GenerateElement.generatePageElement(
        "div",
        ["nav-project-content-container"],
        projectContainer
    );

    lists.forEach((list) => {
        projectContentContainer.appendChild(list.listNavVisual);
    });

    return projectContainer;
}
