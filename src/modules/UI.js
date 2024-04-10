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

        user.projects.forEach((project) => {
            /* const navProjectVisual = ProjectNavVisual.create(
            project.title,
            project.lists
        );
        navContentContainer.appendChild(navProjectVisual); */

            navContentContainer.appendChild(project.projectNavVisual);
        });

        navContainer.appendChild(navContentContainer);
    }

    static fillDisplayPaneContent() {}
}

//clear page content

//clear nav

//clear content window

//refresh page content

//refresh nav

//refresh content window

//
