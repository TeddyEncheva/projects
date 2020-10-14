class User {
    constructor(username, password, firstName, lastName, isAdmin) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAdmin = isAdmin;
    }

    get _id() {
        return this.id;
    }

    set _id(x) {
        this.id = x;
    }


    get _username() {
        return this.username;
    }

    set _username(x) {
        this.username = x;
    }

    get _password() {
        return this.password;
    }

    set _password(x) {
        this.password = x;
    }

    get _firstName() {
        return this.firstName;
    }

    set _firstName(x) {
        this.firstName = x;
    }

    get _lastName() {
        return this.lastName;
    }

    set _lastName(x) {
        this.lastName = x;
    }

    get _isAdmin() {
        return this.isAdmin;
    }

    set _isAdmin(x) {
        this.isAdmin = x;
    }
}