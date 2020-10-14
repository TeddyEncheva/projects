export default class Task {
    constructor(
        public title: string,
        public description?: string,
        public status?: string,
        public assigneeId?: number,
        public id?: string,
        public projectId?: string,
        public createDate?: string,
        public updateDate?: string,
        public creatorId?: string,
        public updaterId?: string) {}
}