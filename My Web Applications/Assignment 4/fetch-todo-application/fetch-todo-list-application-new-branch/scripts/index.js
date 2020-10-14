(async() => {

     render(homePage());
     handleMenu();
  

})();


async function render(innerHtml) {
    let contentDiv =  document.getElementById('content');
    contentDiv.innerHTML = innerHtml;
}

async function handleMenu() {

    const loggedUser = AuthenticationService.getLoggedUser();

    if (loggedUser == null) {
        document.getElementById('loginLink').style.display = '';
        document.getElementById('homeLink').style.display = '';
        document.getElementById('usersLink').style.display = 'none';
        document.getElementById('toDoListLink').style.display = 'none';
        document.getElementById('logoutLink').style.display = 'none';
        document.getElementById("logged").textContent = "No User Logged";
        return;
    } else {
        document.getElementById("logged").textContent = "Logged User: " + loggedUser.username;
        document.getElementById('logoutLink').style.display = '';
        document.getElementById('loginLink').style.display = 'none';
    }

    if (loggedUser.isAdmin) {

        document.getElementById('usersLink').style.display = '';
        document.getElementById('toDoListLink').style.display = '';
    } else {
        document.getElementById('toDoListLink').style.display = '';
        document.getElementById('usersLink').style.display = 'none';
    }
}