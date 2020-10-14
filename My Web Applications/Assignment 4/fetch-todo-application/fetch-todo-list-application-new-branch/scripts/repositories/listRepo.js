class ToDoRepository extends BaseRepository {
  static url = URL_LIST;

  static async shareItem(id, userId) {
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
