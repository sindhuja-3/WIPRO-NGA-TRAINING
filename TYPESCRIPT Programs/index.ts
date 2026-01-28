class User {

    username: string;
    password: string;

    constructor() {
        this.username = "";
        this.password = "";
    }

    input(username: string, password: string): void {
        this.username = username;
        this.password = password;
    }

    display(): void {
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
    }
}

let user1: User = new User();

user1.input("Sindhu", "0304");

user1.display();