class ToDoList {

    constructor(userId, title, shareWith, creationDate, editDate, editor) {
        this._userId = userId;
        this._title = title;
        this._shareWith = shareWith;
        this._creationDate = creationDate;
        this._editDate = editDate;
        this._editor = editor;
    }

    get id() {
        return this._id;
    }

    set id(x) {
        this._id = x;
    }

    get userId() {
        return this._userId;
    }

    set userId(x) {
        this._userId = x;
    }

    get title() {
        return this._title;
    }

    set title(x) {
        this._title = x;
    }

    get shareWith() {
        return this._shareWith;
    }

    set shareWith(x) {
        this._shareWith = x;
    }

    get creationDate() {
        return this._creationDate;
    }

    set creationDate(x) {
        this._creationDate = x;
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