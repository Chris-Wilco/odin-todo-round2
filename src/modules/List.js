import * as Item from "./item.js";
import * as GenerateElement from "./GeneratePageElement.js";

export function createList(title, description, listItems = []) {
    function addListItem() {
        const itemName = prompt("Item name?");
        const itemDescription = prompt("Item description?");
        const itemDueDate = prompt("Item due date?");
        const newItem = Item.create(itemName, itemDescription, itemDueDate);
        listItems.push(newItem);
        return newItem;
    }

    const listVisual = createListVisual(
        title,
        description,
        listItems,
        addListItem
    );

    const listNavVisual = createListNavVisual(title);

    let contentContainer;
    let navContainer;

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
        listItems.forEach((item) => {
            item.updateNavContainer(newNavContainer);
        });
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
        listItems.forEach((item) => {
            item.updateContentContainer(newContentContainer);
        });
    }

    return {
        title,
        description,
        listItems,
        listVisual,
        listNavVisual,
        addListItem,
        updateNavContainer,
        updateContentContainer,
    };
}

export function createListVisual(title, description, listItems, addListItem) {
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

    const listTitle = GenerateElement.generatePageElement(
        "div",
        ["list-title"],
        listInfoContainer,
        title
    );

    const listDescription = GenerateElement.generatePageElement(
        "div",
        ["list-description"],
        listInfoContainer,
        description
    );

    const addNewItemButton = GenerateElement.generatePageElement(
        "div",
        ["new-list-item-button"],
        listTitleContainer
    );
    addNewItemButton.addEventListener("click", () => {
        const newItem = addListItem();
        listContainer.appendChild(newItem.itemVisual);
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

    appendWholeItemList(listContainer, listItems);

    return listContainer;
}

export function appendWholeItemList(listContainer, listItems) {
    listItems.forEach((item) => {
        listContainer.appendChild(item.itemVisual);
    });
}

import * as GenerateElement from "./generatePageElement.js";

export function createListNavVisual(title) {
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
        title
    );

    return listTitleContainer;
}
