import {  URL_PROJECT, URL_TASK, URL_WORKLOG } from "../utils/constants";
import BaseService from "./baseService";


class TaskService extends BaseService {
  constructor(){
    super(URL_TASK);
  }
  public parentUrl = URL_PROJECT;
  public url =  URL_TASK;
  public taskURL = URL_TASK;

  public async updateUrl(id:string){
      this.url =  `${this.parentUrl}/${id}${URL_TASK}`;
  } 
}

export default new TaskService;