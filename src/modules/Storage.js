import User from "./User.js";

export default class Storage {
    constructor() {
        const jsonInfo = JSON.parse("./userStorage.json");
        const userList = this.parseUsers(jsonInfo);
    }

    getUsers() {
        return userList;
    }

    parseUsers(jsonText) {
        const users = [];

        jsonText.foreach((user) => {
            const userName = user.name;
            const userProjects = this.parseProjects(user.projects);
            const newUser = new User(userName, userProjects);

            users.push(newUser);
        });
        return users;
    }

    parseProjects(jsonProjects) {
        const projects = [];
        jsonProjects.foreach((project) => {
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
        jsonLists.foreach((list) => {
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
        jsonTasks.foreach((task) => {
            const taskName = task.name;
            const taskDescription = task.description;
            const taskDueDate = task.dueDate;
            const newTask = new Task(taskName, taskDueDate, taskDescription);
            tasks.push(newTask);
        });
        return tasks;
    }
}
