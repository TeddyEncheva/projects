import {URL_AUTH, URL_BASE, TOKEN, LOGGED_USER} from './constants';

export default class AuthenticationService {
  public static async authenticate(username: string, password: string) {
    const response = await fetch(URL_BASE + URL_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (response.ok) {
      const result = await response.json();
      const { token, userId, username, isAdmin } = result;
      window.sessionStorage.setItem(TOKEN, token);
      
      window.sessionStorage.setItem(LOGGED_USER, JSON.stringify({
        id: userId,
        username: username,
        isAdmin: isAdmin
      }))
    }
  }

  public  static getLoggedUser() {
    return JSON.parse(window.sessionStorage.getItem(LOGGED_USER));
  }

  public static logout() {
    window.sessionStorage.removeItem(LOGGED_USER);
    window.sessionStorage.removeItem(TOKEN);
  }

  public static getAuthorizationHeader() {
    return 'Bearer ' + window.sessionStorage.getItem(TOKEN);
  }
}
