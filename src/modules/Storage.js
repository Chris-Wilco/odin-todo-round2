//import User from "./User.js";
import storageFile from "./userStorage.json";
import Task from "./Task.js";
import List from "./List.js";
import Project from "./Project.js";
import User from "./User.js";

export default class Storage {
    constructor() {
        this.refreshUserArray();
        console.log(this.userList);
    }

    getUsers() {
        return this.userList;
    }

    refreshUserArray() {
        const jsonTextOfStoredUserArray = this.getFromLocalStorage();

        this.storedUserList = this.parseUsers(jsonTextOfStoredUserArray);
        this.userList = this.parseUsers(jsonTextOfStoredUserArray);
    }

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
            console.log("No users stored in localStorage.");
            console.log("Retrieving user list from userStorage.json.");
            return storageFile;
        }
        return JSON.parse(storedUsers);
    }

    //TODO: Is this useless?
    //Not for *every* case, I don't think. When we're saving a user that already exists, it makes sense to check against existing users and then overwrite the pre-existing one so that we don't duplicated every time we save.
    //I think it is for the case of creating a brand new user from the login screen though. It adds the new user even if the user already exists so when checking with a new blank "user 1", this overwrites the already existing "user 1".
    overwriteSavedUser(userToStore) {
        if (this.doesUserAlreadyExist(userToStore)) {
            const target = this.userList.find(
                (user) => user.name === userToStore.name
            );
            Object.assign(target, userToStore);
        } else {
            this.userList.push(userToStore);
        }
        this.storeUserArray();
    }

    doesUserAlreadyExist(userToCheck) {
        const containsUser = this.userList.some(
            (user) => user.name === userToCheck.name
        );
        console.log(`Contains User ${userToCheck}? : ${containsUser}`);
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

    deleteUserArray() {
        localStorage.removeItem("userStorage");
    }
}
