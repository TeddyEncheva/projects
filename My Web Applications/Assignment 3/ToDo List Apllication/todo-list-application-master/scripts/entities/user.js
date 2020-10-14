class User {
    constructor(username, password, firstName, lastName, isAdmin, creationDate, creator, editDate, editor) {
        this._username = username;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._isAdmin = isAdmin;
        this._creationDate = creationDate;
        this._creator = creator;
        this._editDate = editDate;
        this._editor = editor;
    }

    get id() {
        return this._id;
    }

    set id(x) {
        this._id = x;
    }


    get username() {
        return this._username;
    }

    set username(x) {
        this._username = x;
    }

    get password() {
        return this._password;
    }

    set password(x) {
        this._password = x;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(x) {
        this._firstName = x;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(x) {
        this._lastName = x;
    }

    get isAdmin() {
        return this._isAdmin;
    }

    set isAdmin(x) {
        this._isAdmin = x;
    }

    get creationDate() {
        return this._creationDate;
    }

    set creationDate(x) {
        this._creationDate = x;
    }

    get creator() {
        return this._creator;
    }

    set creator(x) {
        this._creator = x;
    }

    get editDate() {
        return this._editDate;
    }

    set editDate(x) {
        this._editDate = x;
    }

    get editor() {
        return this._editor;
    }

    set editor(x) {
        this._editor = x;
    }
}