//import User from "./User.js";
import storageFile from "./userStorage.json";
import Task from "./Task.js";
import List from "./List.js";
import Project from "./Project.js";
import User from "./User.js";

export default class Storage {
    constructor() {
        const jsonInfo = JSON.parse(JSON.stringify(storageFile));
        this.userList = this.parseUsers(jsonInfo);
    }

    getUsers() {
        return this.userList;
    }

    parseUsers(jsonText) {
        const users = [];

        jsonText.forEach((user) => {
            const userName = user.name;
            const userProjects = this.parseProjects(user.projects);
            const newUser = new User(userName, userProjects);

            users.push(newUser);
        });

        /* const thisUser = jsonText[0];
        const userName = thisUser.name;
        const userProjects = thisUser.parseProjects(user.projects);
        const newUser = new User(userName, userProjects);

        users.push(newUser); */

        return users;
    }

    parseProjects(jsonProjects) {
        const projects = [];
        jsonProjects.forEach((project) => {
            const projectName = project.name;
            const projectDescription = project.description;
            const projectLists = this.parseLists(project.lists);
            const newProject = new Project(
                projectName,
                projectDescription,
                projectLists
            );
            projects.push(newProject);
        });
        return projects;
    }

    parseLists(jsonLists) {
        const lists = [];
        jsonLists.forEach((list) => {
            const listName = list.name;
            const listDescription = list.description;
            const listTasks = this.parseTasks(list.tasks);
            const newList = new List(listName, listDescription, listTasks);
            lists.push(newList);
        });
        return lists;
    }

    parseTasks(jsonTasks) {
        const tasks = [];
        jsonTasks.forEach((task) => {
            const taskName = task.name;
            const taskDescription = task.description;
            const taskDueDate = task.dueDate;
            const newTask = new Task(taskName, taskDueDate, taskDescription);
            tasks.push(newTask);
        });
        return tasks;
    }
}
