export default class Task {
    constructor(
        public title: string,
        public description: string,
        public isComplete: boolean,
        public id?: number,
        public taskListId?: number,
        public createDate?: string,
        public updateDate?: string,
        public creatorId?: number,
        public updaterId?: number) {}
}