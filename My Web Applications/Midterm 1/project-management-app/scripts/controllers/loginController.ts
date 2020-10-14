import AuthenticationService from '../services/authenticationService';
import { LoggedUser } from '../utils/models';
import loginPage from '../views/pages/loginPage';
import { MAIN_CONTENT_SELECTOR } from '../utils/constants';
import { handleNavigation, render } from '../utils/helpers';
import { projectLoad } from './projectController';


export async function submitLoginForm(): Promise<void> {
  event.preventDefault();
  
  const username: string = (document.getElementById('username') as HTMLInputElement).value;
  const password: string = (document.getElementById('password') as HTMLInputElement).value;
  
  try {
    await AuthenticationService.authenticate(username, password);
    const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();

    if (!loggedUser) {
      (document.getElementById('error') as HTMLElement).innerHTML = 'User doesn\'t exist';
    } else {
      await projectLoad();
      handleNavigation();
    }
  } catch (error) {
    console.log('Error:' + error);
  }
}

export function logout(): void {
  AuthenticationService.logout();
  handleNavigation();
  render(MAIN_CONTENT_SELECTOR, loginPage());
}
