async function homeLink_Click() {

    await render(homePage());
}

async function loginLink_Click() {

    await render(loginPage());
}

async function loginForm_Submit() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    await AuthenticationService.authenticate(username, password);
    const loggedUser = await AuthenticationService.getLoggedUser();

    if (loggedUser != null) {
        await render(homePage());
        await handleMenu();
    } else {
        document.getElementById('error').innerHTML = "User doesn't exist";
    }
}

const taskCount = async function(listId){
    const tasks = await TasksRepository.getAll();
    let count = 0;

    if(tasks == null){
        return count;
    }

    for (i=0; i< tasks.length; i++){
        let currentTask = tasks[i];

        if(currentTask._listId == listId){
            count++;
        }
    }
    return count;
}

async function  currentTime(){
    let d = new Date();
    let today = ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth()+1)).slice(-2) + '.' + d.getFullYear()
     + ' Time:' +('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
     return today;
}

async function logoutLink_Click() {

    await AuthenticationService.logout();
    await handleMenu();
    await render(homePage());
}