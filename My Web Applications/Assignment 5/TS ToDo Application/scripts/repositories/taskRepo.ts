import {URL_BASE, URL_LIST, URL_TASK, URL_ASSIGNEES} from "../constants";
import AuthenticationService from "../authenticationService";
import BaseRepository from './baseRepo';
class TaskRepository extends BaseRepository {
  constructor(){
    super(URL_TASK);
  }
  public parentUrl = URL_LIST;
  public url =  URL_TASK;
  public assignees = URL_ASSIGNEES;

  public async updateUrl(id:number){
      this.url =  `${this.parentUrl}/${id}${URL_TASK}`;
  }

  public async assignUser(id:number, userId:number) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify({"userId": userId})
    });
  }

  public async getTaskAssignees(id:number) {
    const response = await fetch(`${URL_BASE}${this.url}/${id}${this.assignees}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });
    return await response.json();
  } 
}

export default new TaskRepository;