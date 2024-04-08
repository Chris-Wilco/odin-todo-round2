import * as GenerateElement from "./GeneratePageElement.js";

export function createContentContainer(user) {
    let navContainer;

    const contentContainer = GenerateElement.generatePageElement(
        "div",
        ["content-container"],
        document.querySelector("body")
    );

    function clearContentArea() {
        while (contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.lastChild);
        }
    }

    function changeProject(project) {
        contentContainer.appendChild(project.projectVisual);
    }

    function resetContentContainer() {
        clearContentArea();
        console.log("blamo!");
        changeProject(user.projects[0]);
        //navContainer.resetNavVisual();
    }

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
    }

    function setUser(newUser) {
        user = newUser;
        resetContentContainer();
    }

    return {
        contentContainer,
        clearContentArea,
        changeProject,
        resetContentContainer,
        updateNavContainer,
        setUser,
    };
}
