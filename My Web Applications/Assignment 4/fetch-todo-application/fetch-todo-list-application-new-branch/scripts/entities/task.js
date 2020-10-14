class Task {
    constructor(title, description, isComplete) {
        this.title = title;
        this.description = description;
        this.isComplete = isComplete;
    }

    get _id() {
        return this.id;
    }

    set _id(x) {
        this.id = x;
    }

    get _title() {
        return this.title;
    }

    set _title(x) {
        this.title = x;
    }

    get _description(){
        return this.description;
    }

    set _description(x){
        this.description = x;
    }
    
    get _isComplete() {
        return this.isComplete;
    }

    set _isComplete(x) {
        this.isComplete = x;
    }
  
}