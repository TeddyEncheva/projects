export default class Team {
    constructor(
        public title: string ,
        public id?: string,
        public createDate?: string,
        public updateDate?: string,
        public creatorId?: string,
        public updaterId?: string) { }
}