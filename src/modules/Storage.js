//import User from "./User.js";
import storageFile from "./userStorage.json";
import Task from "./Task.js";
import List from "./List.js";
import Project from "./Project.js";
import User from "./User.js";

export default class Storage {
    constructor() {
        const jsonTextOfStoredUserArray = this.getFromLocalStorage();
        /* console.log(`jsonTextOfStoredUserArray: ${jsonTextOfStoredUserArray}`);
        console.log(typeof jsonTextOfStoredUserArray);
        console.log(jsonTextOfStoredUserArray); */
        /* console.log(jsonText);
        console.log(typeof jsonText); */
        this.userList = this.parseUsers(jsonTextOfStoredUserArray);
        console.log(this.userList);
    }

    getUsers() {
        return this.userList;
    }

    //TODO: Do we need a user container object to then be able to commit back into the json file?

    parseUsers(jsonTextOfStoredUserArray) {
        const users = [];

        jsonTextOfStoredUserArray.forEach((user) => {
            const userName = user.name;
            const newUser = new User(userName, [], jsonTextOfStoredUserArray);
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
            const taskChecked = task.checked;

            const newTask = new Task(
                taskName,
                taskDueDate,
                taskDescription,
                parentList,
                taskChecked
            );
            tasks.push(newTask);
        });
        return tasks;
    }

    //Returns an array of user objects either from base file or from the stored file of users
    getFromLocalStorage() {
        const storedUsers = localStorage.getItem("userStorage");

        if (!localStorage.getItem("userStorage")) {
            console.log("blipo!");
            return storageFile;
        }
        return JSON.parse(storedUsers);
    }

    simpleSendToStorage(userToStore) {
        /* const thatsNotAnArrayThisIsAnArray = [];
        thatsNotAnArrayThisIsAnArray.push(userToStore);
        const toSendToStorage = JSON.stringify(
            thatsNotAnArrayThisIsAnArray,
            function replacer(key, value) {
                return key === "parentObject" ? undefined : value;
            }
        ); */

        /* this.userList.push(userToStore); */
        /* const toSendToStorage = JSON.stringify(
            this.userList,
            function replacer(key, value) {
                return key === "parentObject" ? undefined : value;
            }
        ); */

        /* console.log(toSendToStorage);
        console.log(JSON.parse(toSendToStorage)); */

        /* localStorage.setItem("userStorage", toSendToStorage); */
        console.log(`this is a list of users before adding:`);
        console.log(this.userList);

        console.log(`this is the user: ${userToStore}`);
        console.log(userToStore);

        /* if (this.doesUserAlreadyExist(userToStore)) {
            const target = this.userList.find((user) => {
                user.name === userToStore.name;
            });
            Object.assign(target, userToStore);
            console.log("boink!");
        } else {
            this.userList.push(userToStore);
            console.log("baaaaank!");
        } */

        if (this.doesUserAlreadyExist(userToStore)) {
            const target = this.userList.find(
                (user) => user.name === userToStore.name
            );
            Object.assign(target, userToStore);
            console.log("boink!");
        } else {
            this.userList.push(userToStore);
            console.log("baaaaank!");
        }

        console.log(`this is a list of users before storing:`);
        console.log(this.userList);

        this.storeUserArray();
    }

    doesUserAlreadyExist(userToCheck) {
        const containsUser = this.userList.some(
            (user) => user.name === userToCheck.name
        );
        console.log(`Contains User? : ${containsUser}`);
        return containsUser;
    }

    storeUserArray() {
        const toSendToStorage = JSON.stringify(
            this.userList,
            function replacer(key, value) {
                return key === "parentObject" ? undefined : value;
            }
        );

        localStorage.setItem("userStorage", toSendToStorage);
    }

    //TODO: Should there be a method to nuke localstorage of all saved data?
    //Probably...
}
