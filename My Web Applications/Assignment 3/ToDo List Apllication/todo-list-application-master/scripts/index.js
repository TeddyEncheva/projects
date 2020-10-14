(async() => {

     render(homePage());
     handleMenu();
  
    if (await UsersRepository.count() == 0) {
        const initialUser = new User('admin', 'adminpass', 'Administrator', 'Administrator', true,  'Initial', "System");
        await UsersRepository.addUser(initialUser);
    }

})();


async function render(innerHtml) {
    let contentDiv =  document.getElementById('content');
    contentDiv.innerHTML = innerHtml;
}

async function handleMenu() {

    const loggedUser = await AuthenticationService.getLoggedUser();

    if (loggedUser == null) {
        document.getElementById('loginLink').style.display = '';
        document.getElementById('homeLink').style.display = '';
        document.getElementById('usersLink').style.display = 'none';
        document.getElementById('toDoListLink').style.display = 'none';
        document.getElementById('logoutLink').style.display = 'none';
        return;
    } else {
        document.getElementById('logoutLink').style.display = '';
        document.getElementById('loginLink').style.display = 'none';
    }

    if (loggedUser._isAdmin) {

        document.getElementById('usersLink').style.display = '';
        document.getElementById('toDoListLink').style.display = '';
    } else {
        document.getElementById('toDoListLink').style.display = '';
        document.getElementById('usersLink').style.display = 'none';
    }
}