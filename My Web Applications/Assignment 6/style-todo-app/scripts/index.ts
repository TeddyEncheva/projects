
import { handleNavigation, render } from './utils/helpers';
import { MAIN_CONTENT_SELECTOR } from './utils/constants';
import { toDoLoad } from './controllers/toDoController';
import AuthenticationService from './services/authenticationService';
import loginPage from './views/pages/loginPage';

import '../styles/import.css';
import  '../img/icon_Invoices.svg';
import '../img/ic_person_24px.svg';
import '../img/ic_assignment_24px.svg';
import '../img/Icon - Menu - Rounded.svg';
import '../img/ic_add_24px.svg';
import '../img/user-tasks.svg';
import '../img/ic_create_24px.svg';

window.addEventListener('DOMContentLoaded', init);
async function init() {
  const loggedUser = AuthenticationService.getLoggedUser();

  if (!loggedUser) {
    render(MAIN_CONTENT_SELECTOR, loginPage());
  } else {
    await toDoLoad();
  }
 
  handleNavigation();
}
