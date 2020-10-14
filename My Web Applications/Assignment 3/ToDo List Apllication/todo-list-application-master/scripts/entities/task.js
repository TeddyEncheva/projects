class Task {
    constructor(listId, task, details, isCompleted, creationDate, creator, editDate, editor) {
        this._listId = listId;
        this._task = task;
        this._details = details;
        this._isCompleted = isCompleted;
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

    get listId() {
        return this.listId;
    }

    set listId(x) {
        this._listId = x;
    }

    get task() {
        return this._task;
    }

    set task(x) {
        this._task = x;
    }

    get details(){
        return this._details;
    }

    set details(x){
        this._details = x;
    }
    
    get isCompleted() {
        return this._isCompleted;
    }

    set isCompleted(x) {
        this._isCompleted = x;
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