import * as GenerateElement from "./GeneratePageElement.js";

export function createNewTask(title, description, dueDate) {
    const itemVisual = createTaskVisual(title, description, dueDate);

    let contentContainer;
    let navContainer;

    function readTitle() {
        return title;
    }

    function updateTitle(newTitle) {
        if (newTitle) {
            this.title = newTitle;
        }
    }

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
    }

    return {
        /* title, */
        readTitle,
        updateTitle,
        description,
        dueDate,
        itemVisual,
        updateNavContainer,
        updateContentContainer,
    };
}

export function createTaskVisual(title, description, dueDate) {
    const listItemContainer = GenerateElement.generatePageElement("div", [
        "item-container",
    ]);

    const checkboxContainer = GenerateElement.generatePageElement(
        "div",
        ["item-checkbox-container"],
        listItemContainer
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
        listItemContainer
    );

    const itemTitle = GenerateElement.generatePageElement(
        "div",
        ["item-title"],
        infoContainer,
        title
    );

    const itemDescription = GenerateElement.generatePageElement(
        "div",
        ["item-description"],
        infoContainer,
        description
    );

    const itemDueDate = GenerateElement.generatePageElement(
        "div",
        ["item-due-date"],
        infoContainer,
        dueDate
    );

    const removeItemButton = GenerateElement.generatePageElement(
        "div",
        ["item-remove-button"],
        listItemContainer,
        "remove item"
    );
    removeItemButton.addEventListener("click", () => {
        listItemContainer.remove();
    });

    return listItemContainer;
}