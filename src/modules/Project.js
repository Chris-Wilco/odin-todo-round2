//import * as List from "./List.js";

export default class Project {
    constructor(name, description = "No description set", lists = []) {
        this.name = name;
        this.description = description;
        this.lists = lists;
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
