//import * as List from "./List.js";

export default class Project {
    //TODO: Should the project have a reference to the UI element containing it's information to make updating said UI element easier?
    constructor(
        name,
        description = "No description set",
        lists = [],
        parentUser
    ) {
        this.name = name;
        this.description = description;
        this.lists = lists;
        this.parentUser = parentUser;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getDescription() {
        return this.description;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    getTasks() {
        return this.lists;
    }

    setLists(lists) {
        this.lists = lists;
    }

    containsList(listName) {
        return this.lists.some((list) => list.getName() == listName);
    }

    addList(newList) {
        if (!this.containsList(newList.getName())) {
            this.lists.push(newList);
        }
    }

    removeList(listName) {
        this.lists = this.lists.filter((list) => list.getName() !== listName);
    }

    /* addList() {
        const listName = prompt("Item name?");
        const listDescription = prompt("Item description?");
        const newList = new List(listName, listDescription);
        lists.push(newList);
    } */
}
