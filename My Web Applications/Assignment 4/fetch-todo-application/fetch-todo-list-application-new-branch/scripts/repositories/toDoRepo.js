class ToDoRepository {

    static lists = 'lists'

    static async getAll() {

        return JSON.parse(await window.localStorage.getItem(this.lists));
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
        const items = await this.getAll();
        const result = [];
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._userId == id) {

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

    static async addList(item) {
        let items = await this.getAll();
        const id = this.getNextId(items);
        item._id = id;

        if (items == null)
            items = [];

        items.push(item);
        await window.localStorage.setItem(this.lists, JSON.stringify(items));
    }

    static async editList(id, item) {
        const items = await this.getAll();

        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {
                currentItem._userId = item.userId;
                currentItem._title = item.title;
                currentItem._editDate = item.editDate;
                currentItem._editor = item.editor;
                currentItem._shareWith = item.shareWith;
            }
        }

        await window.localStorage.setItem(this.lists, JSON.stringify(items));
    }

    static async deleteList(id) {

        const items = await this.getAll();
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {
                items.splice(i, 1);
            }
        }

        await window.localStorage.setItem(this.lists, JSON.stringify(items));
        
        if(items.length==0){
            localStorage.removeItem(this.lists);
        }
    }
}