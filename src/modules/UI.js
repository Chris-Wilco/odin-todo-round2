export default class UI {
    constructor(user) {
        this.user = user;
    }

    //
}

import * as GenerateElement from "./GeneratePageElement.js";

export function generateUI(user) {
    //page body
    const pageBody = document.querySelector("body");

    fillPage(user, "default", pageBody);

    //nav container
    /* const navContainer = GenerateElement.generatePageElement(
        "div",
        ["nav-container"],
        document.querySelector("body")
    ); */

    //content container
    /* const contentContainer = GenerateElement.generatePageElement(
        "div",
        ["content-container"],
        document.querySelector("body")
    ); */
}

//fill page content
export function fillPage(user, projectName = "default", pageBody) {
    /* const pageBody = document.querySelector("body"); */

    pageBody.appendChild(fillNavContent(user));
    pageBody.appendChild(fillPageContent(user, projectName));
}

export function fillNavContent(user) {
    const navContainer = GenerateElement.generatePageElement(
        "div",
        ["nav-container"],
        document.querySelector("body")
    );

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

    user.projects.forEach((project) => {
        /* const navProjectVisual = ProjectNavVisual.create(
            project.title,
            project.lists
        );
        navContentContainer.appendChild(navProjectVisual); */

        navContentContainer.appendChild(project.projectNavVisual);
    });

    navContainer.appendChild(navContentContainer);

    return navContainer;
}

export function fillPageContent(user, projectName) {}

//clear page content

//clear nav

//clear content window

//refresh page content

//refresh nav

//refresh content window

//
