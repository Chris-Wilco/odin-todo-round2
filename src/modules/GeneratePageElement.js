export function generatePageElement(
    elementType,
    elementClasses = {},
    parentElement = null,
    elementText = null
) {
    if (elementType == null) {
        return;
    }
    const newElement = document.createElement(elementType);

    if (elementClasses.length > 0) {
        elementClasses.forEach((className) => {
            newElement.classList.add(className);
        });
    }

    if (elementText != null) {
        newElement.textContent = elementText;
    }

    if (parentElement != null) {
        parentElement.appendChild(newElement);
    }

    return newElement;
}

export function clearNodeContent(thisNode) {
    while (thisNode.firstChild) {
        thisNode.removeChild(thisNode.lastChild);
    }
}

export function createDropdown(
    dropdownButtonText,
    dropdownItemsDiv,
    parentDiv = null
) {
    const dropDownContainerDiv = generatePageElement(
        "div",
        ["dropdown-container-div"],
        parentDiv
    );
    const dropdownButton = generatePageElement(
        "div",
        ["dropdown-button", "button"],
        dropDownContainerDiv,
        dropdownButtonText
    );
    dropDownContainerDiv.appendChild(dropdownItemsDiv);
    this.menuShowHide(dropdownItemsDiv);

    dropdownButton.addEventListener("click", () => {
        this.menuShowHide(dropdownItemsDiv);
    });

    return dropDownContainerDiv;
}

export function menuShowHide(dropDownItemsDiv) {
    if (dropDownItemsDiv.style.display == "none") {
        dropDownItemsDiv.style.display = "block";
    } else {
        dropDownItemsDiv.style.display = "none";
    }
}
