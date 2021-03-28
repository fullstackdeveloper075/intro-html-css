const prompt = require('prompt-sync')();

class Content {
    constructor(name, category) {
        this.name = name;
        this.category = category;
      }
  }
class ContentList {
    constructor() {
        this.content = [];
    }
    createContent(name, category) {
        let temp = new Content();
        temp.name = prompt("Enter Content Name: ");
        temp.category = prompt("Enter Category: ");
        this.content.push(temp);
    }
    displayPremiumContent() {
        for (let i=0; i<content.length; ++i) {
            (i.category=='premium') ? console.log(`${i.name}`) : '';
        }
    }
    displayFreeContent() {
        for (let i=0; i<content.length; ++i) {
            (i.category=='free') ? console.log(`${i.name}`) : '';
        }
    }
  }

class User {
    constructor(firstName, lastName, email, id='') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = lastName + 100*(Math.floor(Math.random()));
        this.subscription = false;
    }
    displayDetails() {
        console.log(`User ID: ${this.id}`);
        console.log(`User Name: ${this.firstName} ${this.lastName}`);
    }
}
class UserDataBase {
    constructor() {
        this.users = [];
    }
    addUser(fName, lName, email) {
        temp = new User(fName, lName, email);
        users.push(temp);
    }
    getPremiumUsers() {
        for (let i=0; i<users.length; ++i) {
            (i.category=='free') ? i.displayDetails() : '';
        }
    }
    displayUsers() {
        for (let i=0; i<users.length; ++i) {
            i.displayDetails();
        }
    }
}

function start() {
    let usersdB = new UserDataBase();
    let contents = new ContentList();
}

start();