class AuthenticationService {
  static async authenticate(username, password) {
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

  static getLoggedUser() {
    return JSON.parse(window.sessionStorage.getItem(LOGGED_USER));
  }

  static logout() {
    window.sessionStorage.removeItem(LOGGED_USER);
    window.sessionStorage.removeItem(TOKEN);
  }

  static getAuthorizationHeader() {
    return 'Bearer ' + window.sessionStorage.getItem(TOKEN);
  }
}
