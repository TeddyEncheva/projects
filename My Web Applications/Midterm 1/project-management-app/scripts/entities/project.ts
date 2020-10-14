export default class Project {
    constructor(
        public title: string ,
        public description: string,
        public id?: string,
        public createDate?: string,
        public updateDate?: string,
        public creatorId?: string,
        public updaterId?: string) { }
}