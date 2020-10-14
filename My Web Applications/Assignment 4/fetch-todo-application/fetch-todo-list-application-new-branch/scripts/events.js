async function homeLink_Click() {
     render(homePage());
}

async function loginLink_Click() {
     render(loginPage());
}

async function loginForm_Submit() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    await AuthenticationService.authenticate(username, password);
    const loggedUser = AuthenticationService.getLoggedUser();

    if (loggedUser != null) {
         render(homePage());
         handleMenu();
    } else {
        document.getElementById('error').innerHTML = "User doesn't exist";
    }
}

const taskCount = async function(listId){
    await TaskRepository.updateUrl(listId);
    const tasks = await TaskRepository.getAll();
    let count = tasks.length;
    return count;
}

async function  currentTime(date){
    const d = new Date(date);
    let today = ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth()+1)).slice(-2) + '.' + d.getFullYear()
     + ' Time:' +('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
     return today;
}

async function logoutLink_Click() {
    AuthenticationService.logout();
    handleMenu();
    render(homePage());
}