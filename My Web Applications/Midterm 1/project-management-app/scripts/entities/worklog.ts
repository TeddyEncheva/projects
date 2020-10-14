export default class Worklog {
    constructor(
        public time: number ,
        public userId: string,
        public date: string,
        public id?: string,
        public taskId?: string) { }
}