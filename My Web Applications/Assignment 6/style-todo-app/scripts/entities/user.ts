export default class User {
    constructor(
        public username: string ,
        public password: string,
        public firstName: string,
        public lastName: string,
        public isAdmin: boolean,
        public id?: number,
        public createDate?: string,
        public updateDate?: string,
        public creatorId?: number,
        public updaterId?: number) { }
}