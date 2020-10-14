import {URL_BASE, URL_LIST} from "../utils/constants";
import AuthenticationService from "./authenticationService";

import BaseService from "./baseService";

class ToDoService extends BaseService {
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

export default new ToDoService();

