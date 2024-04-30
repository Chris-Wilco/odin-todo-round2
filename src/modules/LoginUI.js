import * as GenerateElement from "./GeneratePageElement.js";
import UI from "./UI.js";
import Storage from "./Storage.js";
import User from "./User.js";

export default class LoginUI {
    constructor() {
        this.newStorage = new Storage();
        this.userList = this.newStorage.getUsers();
        this.pageBody = document.querySelector("body");
        this.generateLoginPage();
    }

    generateLoginPage() {
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

        this.generateLoginControls(this.loginControlContainer);

        this.userListContainer = GenerateElement.generatePageElement(
            "div",
            ["user-list-container"],
            this.loginContainer
        );

        this.createUserListDiv();
    }

    generateLoginControls(loginControlContainer) {
        this.newUserButton = GenerateElement.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "new user"
        );
        this.newUserButton.addEventListener("click", () => {
            this.createNewUser();
        });

        this.saveUsersButton = GenerateElement.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "save users"
        );
        this.saveUsersButton.addEventListener("click", () => {
            this.newStorage.storeUserArray();
        });

        this.clearUsersButton = GenerateElement.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "clear users"
        );
        this.clearUsersButton.addEventListener("click", () => {
            this.newStorage.deleteUserArray();
            this.newStorage.refreshUserArray();
            this.userList = this.newStorage.userList;
            this.refreshLoginPage();
        });
    }

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
        const newPage = new UI(user, this.newStorage, this);
    }

    clearPageBody() {
        this.pageBody.replaceChildren();
    }

    createNewUser() {
        const newUserName = prompt("New User name?");
        const newUser = new User(newUserName, [], this.userList);

        if (!this.newStorage.doesUserAlreadyExist(newUser)) {
            this.userList.push(newUser);
            this.newStorage.storeUserArray();

            console.log(`Original (stored) user list:`);
            console.log(this.newStorage.storedUserList);
            console.log(`Current user list:`);
            console.log(this.newStorage.userList);
        }
        this.reloadUserList();
    }

    refreshLoginPage() {
        this.clearPageBody();
        this.generateLoginPage();
    }
}
