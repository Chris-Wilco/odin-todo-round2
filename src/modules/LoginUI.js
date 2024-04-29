import * as GenerateElement from "./GeneratePageElement.js";
import UI from "./UI.js";
import Storage from "./Storage.js";
import User from "./User.js";

export default class LoginUI {
    constructor() {
        this.newStorage = new Storage();
        this.userList = this.newStorage.getUsers();

        this.pageBody = document.querySelector("body");
        this.loginPageBody = GenerateElement.generatePageElement(
            "div",
            ["login-page-body"],
            this.pageBody
        );
        this.loginContainer = GenerateElement.generatePageElement(
            "div",
            ["login-container"],
            this.loginPageBody
        );

        this.loginControlContainer = GenerateElement.generatePageElement(
            "div",
            ["login-control-container"],
            this.loginContainer
        );

        this.newUserButton = GenerateElement.generatePageElement(
            "div",
            ["new-user-button", "button"],
            this.loginControlContainer,
            "new user"
        );
        this.newUserButton.addEventListener("click", () => {
            //just gonna add it to the list of potential users for now
            this.createNewUser();
        });

        this.saveUsersButton = GenerateElement.generatePageElement(
            "div",
            ["new-user-button", "button"],
            this.loginControlContainer,
            "save users"
        );

        this.clearUsersButton = GenerateElement.generatePageElement(
            "div",
            ["new-user-button", "button"],
            this.loginControlContainer,
            "clear users"
        );

        this.userListContainer = GenerateElement.generatePageElement(
            "div",
            ["user-list-container"],
            this.loginContainer
        );

        this.createUserListDiv();
    }

    //TODO: Get and return array of users from localStorage
    /* openUsers() {} */

    createUserListDiv() {
        this.userList.forEach((user) => {
            this.userListContainer.appendChild(this.createNewUserDiv(user));
        });
    }

    clearUserListDiv() {
        this.userListContainer.replaceChildren();
    }

    reloadUserList() {
        this.clearUserListDiv();
        this.createUserListDiv();
    }

    createNewUserDiv(user) {
        const userDiv = GenerateElement.generatePageElement(
            "div",
            ["user-name-option", "button"],
            null,
            user.name
        );
        userDiv.addEventListener("click", () => {
            this.createNewUI(user);
        });

        return userDiv;
    }

    createNewUI(user) {
        this.clearPageBody();
        const newPage = new UI(user, this.newStorage);
    }

    clearPageBody() {
        this.pageBody.replaceChildren();
    }

    createNewUser() {
        //Prompt for user info
        const newUserName = prompt("New User name?");

        //create new user
        const newUser = new User(newUserName, [], this.userList);

        //Add it as an actual child of the Storage user array
        this.newStorage.simpleSendToStorage(newUser);
        console.log(`${this.newStorage.getUsers()}`);

        this.reloadUserList();

        //Save the Storage array of users to localStorage to maintain state on page reload

        //make sure user parent container is object
        //Do I need to save this new object immediately?
        //Do i need to alter the save function to include all objects

        //Should this also open the main UI with new user and no projects, etc?
    }
}
