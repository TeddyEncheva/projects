import {URL_BASE} from "../constants";
import AuthenticationService from "../authenticationService";
export default class BaseRepository {
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

    return await response.json();
  }

  public async getById(id: number) {
    const response = await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });

    return await response.json();
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

  public async editItem(id:number, item:any) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify(item)
    });
  }

  public async deleteItem(id:number) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });
  }
}
