import { Listener } from './models';
import AuthenticationService from './authenticationService';
import { usersLink_Click } from './userEvenets';
import { toDoListLink_Click } from './toDoEvents';
import homePage from './views/homePage';
import loginPage from './views/loginPage';

export function render(renderData: {template: string, listeners: Listener[]}): void {
    const contentDiv = document.getElementById('content') as HTMLElement;
    contentDiv.innerHTML = renderData.template;

if (renderData && renderData.listeners && renderData.listeners.length) {
    for (const listener of renderData.listeners) {
      const target = document.getElementById(listener.targetId);
      target.addEventListener(listener.eventType, listener.callback);
    }
  }
}

export function handleMenu(): void {
    const loggedUser = AuthenticationService.getLoggedUser();
    
    const  homeLink = (document.getElementById('homeLink') as HTMLElement);
    homeLink.addEventListener('click', homeLink_Click);

    const loginLink = (document.getElementById('loginLink') as HTMLElement);
    loginLink.addEventListener('click', loginLink_Click);

    const usersLink = (document.getElementById('usersLink') as HTMLElement);
    usersLink.addEventListener('click', usersLink_Click);

    const toDoListLink = (document.getElementById('toDoListLink') as HTMLElement);
    toDoListLink.addEventListener('click', toDoListLink_Click);

    const logoutLink = (document.getElementById('logoutLink') as HTMLElement);
    logoutLink.addEventListener('click', logoutLink_Click);

    const logged = (document.getElementById('logged') as HTMLElement);

        if (loggedUser == null) {
            loginLink.style.display = '';
            homeLink.style.display = '';
            usersLink.style.display = 'none';
            toDoListLink.style.display = 'none';
            logoutLink.style.display = 'none';
            logged.textContent = "No User Logged";
            return;
        } else {
            logged.textContent = `Logged User: ${loggedUser.username}`;
            usersLink.style.display = loggedUser.isAdmin ? '' : 'none';
            toDoListLink.style.display = '';
            logoutLink.style.display = '';
            loginLink.style.display = 'none';
        }
}

export function homeLink_Click() {
     render(homePage());
}

export function loginLink_Click() {
     render(loginPage());
}

export async function loginForm_Submit() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    await AuthenticationService.authenticate(username, password);
    const loggedUser = AuthenticationService.getLoggedUser();

    if (loggedUser != null) {
         render(homePage());
         handleMenu();
    } else {
        (document.getElementById('error') as HTMLElement).innerHTML = "User doesn't exist";
    }
}

export async function  currentTime(date:string): Promise<string>{
    const d = new Date(date);
    let today = ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth()+1)).slice(-2) + '.' + d.getFullYear()
     + ' Time:' +('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    return today;
}

export async function logoutLink_Click() {
    AuthenticationService.logout();
    handleMenu();
    render(homePage());
}