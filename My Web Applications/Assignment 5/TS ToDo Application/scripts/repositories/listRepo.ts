import {URL_BASE, URL_LIST} from "../constants";
import AuthenticationService from "../authenticationService";
import BaseRepository from './baseRepo';

class ToDoRepository extends BaseRepository {
  constructor(){
    super(URL_LIST);
  }
  

  public async shareItem(id: number, userId: number) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify({"userId": userId})
    });
  }
}

export default new ToDoRepository();

