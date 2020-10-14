import { URL_BASE } from "../utils/constants";
import AuthenticationService from "./authenticationService";
import { handleResponse } from '../utils/helpers';

export default class BaseService {
  protected url: string;
  constructor(url: string){
  this.url = url;
  }

  public async getAll() {
    const response = await fetch(`${URL_BASE}${this.url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });

    return handleResponse(response);
  }

  public async getById(id: string) {
    const response = await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });

    return handleResponse(response);
  }

  public async addItem(item: any) {
    await fetch(`${URL_BASE}${this.url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify(item)
    });
  }

  public async editItem(id:string, item:any) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify(item)
    });
  }

  public async deleteItem(id:string) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });
  }
}
