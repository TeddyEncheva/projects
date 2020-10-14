export default class ToDoList {
        constructor(
        public title:string,
        public id?: number,
        public createDate?: string,
        public updateDate?: string,
        public creatorId?: number,
        public updaterId?: number){ }
}