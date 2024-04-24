//import User from "./User.js";
import storageFile from "./userStorage.json";
import Task from "./Task.js";
import List from "./List.js";
import Project from "./Project.js";
import User from "./User.js";

export default class Storage {
    //TODO: rewire the constructor to take a localstorage object
    //If localStorage is blank, load from userStorage file?
    constructor() {
        /* const jsonText = JSON.parse(JSON.stringify(storageFile)); */
        const jsonText = JSON.parse(JSON.stringify(this.getFromLocalStorage()));
        console.log(jsonText);
        this.userList = this.parseUsers(jsonText);
    }

    getUsers() {
        return this.userList;
    }

    //TODO: Do we need a user container object to then be able to commit back into the json file?

    parseUsers(jsonText) {
        const users = [];

        jsonText.forEach((user) => {
            const userName = user.name;
            const newUser = new User(userName, [], jsonText);
            const userProjects = this.parseProjects(user.projects, newUser);
            newUser.setProjects(userProjects);
            users.push(newUser);
        });

        return users;
    }

    //Create parent user first and *then* generate the list of projects once the user object already exists?

    parseProjects(jsonProjects, parentUser) {
        const projects = [];
        jsonProjects.forEach((project) => {
            const projectName = project.name;
            const projectDescription = project.description;
            const newProject = new Project(
                projectName,
                projectDescription,
                [],
                parentUser
            );
            const projectLists = this.parseLists(project.lists, newProject);
            newProject.setLists(projectLists);
            projects.push(newProject);
        });
        return projects;
    }

    parseLists(jsonLists, parentProject) {
        const lists = [];
        jsonLists.forEach((list) => {
            const listName = list.name;
            const listDescription = list.description;
            const newList = new List(
                listName,
                listDescription,
                [],
                parentProject
            );
            const listTasks = this.parseTasks(list.tasks, newList);
            newList.setTasks(listTasks);
            lists.push(newList);
        });
        return lists;
    }

    parseTasks(jsonTasks, parentList) {
        const tasks = [];
        jsonTasks.forEach((task) => {
            const taskName = task.name;
            const taskDescription = task.description;
            const taskDueDate = task.dueDate;
            const newTask = new Task(
                taskName,
                taskDueDate,
                taskDescription,
                parentList
            );
            tasks.push(newTask);
        });
        return tasks;
    }

    //TODO: method to store js user object as a json object via stringify (?)
    sendToLocalStorage(userToStore) {
        const allOfTheJSON = this.parseAllToJSON(userToStore);

        localStorage.setItem("userStorage", allOfTheJSON);
    }

    //Should return JSON object retrieved from localStorage?
    getFromLocalStorage() {
        const storedUsers = localStorage.getItem("userStorage");
        if (storedUsers != null) {
            return storageFile;
        }
        return JSON.parse(storedUsers);
    }

    parseAllToJSON(userToStore) {
        const JSONUserArray = [];
        JSONUserArray.push(userToStore.parseToJSON());
        console.log(JSONUserArray);
        return JSONUserArray;
    }

    //TODO: Should there be a method to nuke localstorage of all saved data?
}
