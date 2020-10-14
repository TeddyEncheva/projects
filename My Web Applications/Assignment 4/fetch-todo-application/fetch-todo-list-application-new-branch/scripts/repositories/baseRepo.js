class BaseRepository {

  static async getAll() {
    const response = await fetch(`${URL_BASE}${this.url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });

    return await response.json();
  }

  static async getById(id) {
    const response = await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });

    return await response.json();
  }

  static async addItem(item) {
    await fetch(`${URL_BASE}${this.url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify(item)
    });
  }

  static async editItem(id, item) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify(item)
    });
  }

  static async deleteItem(id) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
    });
  }
}
