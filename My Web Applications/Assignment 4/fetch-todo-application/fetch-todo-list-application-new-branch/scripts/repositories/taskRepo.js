class TaskRepository extends BaseRepository {
  static parentUrl = URL_LIST;
  static url =  URL_TASK;
  static assignees = URL_ASSIGNEES;

  static async updateUrl(id){
      this.url =  `${this.parentUrl}/${id}${URL_TASK}`;
  }

  static async assignUser(id, userId) {
    await fetch(`${URL_BASE}${this.url}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify({"userId": userId})
    });
  }

  static async getTaskAssignees(id) {
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
