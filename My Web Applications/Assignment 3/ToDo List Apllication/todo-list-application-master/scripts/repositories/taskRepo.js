class TasksRepository {

    static tasks = "tasks";

    static async getAll() {

        return JSON.parse(await window.localStorage.getItem(this.tasks));
    }

    static async count() {
        const items = await this.getAll();

        return items == null ? 0 : items.length;
    }

    static async getById(id) {

        const items = await this.getAll();
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {

                return currentItem;
            }
        }
    }

    static async getByParentId(id) {
        let items = await this.getAll();
        if(items == null){
            items = 0;
        }

        const result = [];
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._listId == id) {

                result.push(currentItem);
            }
        }

        return result;
    }

    static getNextId(items) {

        if (items == undefined | null) {
            return 1;
        }

        return items[items.length - 1]._id + 1;
    }

    static async addTask(item) {
        let items = await this.getAll();
        const id = this.getNextId(items);
        item._id = id;
  
        if (items == null)
        items = [];

        items.push(item);
        await window.localStorage.setItem(this.tasks, JSON.stringify(items));
    }

    static async editTask(id, item) {
        const items = await this.getAll();

        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {
                currentItem._task = item.task;
                currentItem._userId = item.userId;
                currentItem._details = item.details;
                currentItem._isCompleted = item.isCompleted;
                currentItem._editDate = item.editDate;
                currentItem._editor = item.editor;
            }
        }

        await window.localStorage.setItem(this.tasks, JSON.stringify(items));
    }

    static async deleteTask(id) {

        const items = await this.getAll();
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {
                items.splice(i, 1);
            }
        }

        await window.localStorage.setItem(this.tasks, JSON.stringify(items));
            if(items.length==0){
                localStorage.removeItem(this.tasks);
        }
    }

    static async deleteListTasks(id){
        const deleteListId = id;
        const items = await this.getAll();
        if(items==null){
            return [];
        }
        for (let i = 0; i < items.length; i++){
            const currentItem = items[i];
            if(currentItem._listId == deleteListId){
                await this.deleteTask(currentItem._id);
            }
        }
    }
}