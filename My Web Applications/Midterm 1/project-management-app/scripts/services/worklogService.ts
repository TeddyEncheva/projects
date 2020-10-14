import {  URL_TASK, URL_WORKLOG } from "../utils/constants";
import BaseService from "./baseService";


class WorklogService extends BaseService {
  constructor(){
    super(URL_WORKLOG);
  }
  public parentUrl = URL_TASK;
  public url =  URL_WORKLOG;
 

  public async updateUrl(id:string){
      this.url =  `${this.parentUrl}/${id}${URL_WORKLOG}`;
  }
}

export default new WorklogService;