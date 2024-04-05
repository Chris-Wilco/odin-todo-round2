import * as Task from "./Task.js";
import * as List from "./List.js";
import * as Project from "./Project.js";

export function createLists() {
    let projects = [];

    for (let i = 1; i < 3; i++) {
        let lists = [];
        for (let j = 1; j < 4; j++) {
            let listItems = [];
            for (let k = 1; k < 7; k++) {
                let newItem = Task.createNewTask(
                    `Item title ${i}-${j}-${k}`,
                    `Item description ${i}-${j}-${k}`,
                    `Item due date ${i}-${j}-${k}`
                );
                listItems.push(newItem);
            }

            let newList = List.createList(
                `List title ${i}-${j}`,
                `List description ${i}-${j}`,
                listItems
            );
            lists.push(newList);
        }
        let newProject = Project.createProject(
            `Project title ${i}`,
            `Project description ${i}`,
            lists
        );
        projects.push(newProject);
    }

    return projects;
}
