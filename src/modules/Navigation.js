import * as GenerateElement from "./GeneratePageElement.js";

export function createNavigationContainer(user) {
    let contentContainer;

    //Can this still be const if we're going to update it?
    let navVisual = createNavigationVisual(
        user,
        resetNavContainer,
        contentContainer
    );

    function resetNavContainer() {
        navVisual.remove();
        contentContainer.resetContentContainer();

        navVisual = NavigationVisual.create(
            user,
            resetNavContainer,
            contentContainer
        );
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
    }

    return { navVisual, resetNavContainer, updateContentContainer };
}

export function createNavigationVisual(
    user,
    resetNavContainer,
    contentContainer
) {
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
