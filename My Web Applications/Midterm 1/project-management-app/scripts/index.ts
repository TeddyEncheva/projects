
import { handleNavigation, render } from './utils/helpers';
import AuthenticationService from './services/authenticationService';
import { MAIN_CONTENT_SELECTOR } from './utils/constants';
import loginPage from './views/pages/loginPage';
import { projectLoad } from './controllers/projectController';

// images
import '../styles/style.css';
import '../images/person-login-image.svg';
import '../images/ic_create_24px.svg';
import '../images/ic_delete_24px.svg';
import '../images/ic_person_add_24px.svg';
import '../images/cancel-black-36dp.svg';
import '../images/ic_tasks_24px.svg';
import '../images/ic_pending_24px.svg';
import '../images/ic_worklog_24px.svg';
import '../images/ic_projects_24px.svg';
import '../images/ic_polymer_24px.svg';
import '../images/ic_hamburger_24px.svg';
import '../images/ic_users_24px.svg';
import '../images/ic_home_24px.svg';
import '../images/ic_teams_ind_24px.svg';
import '../images/exit_to_app-black-24dp.svg'



window.addEventListener('DOMContentLoaded', init);
async function init() {
  const loggedUser = AuthenticationService.getLoggedUser();
  const burger: HTMLElement = document.getElementById('menu-btn') as HTMLElement;
  if (!loggedUser) {
    render(MAIN_CONTENT_SELECTOR, loginPage());
    burger.style.visibility="hidden";
    
  } else{
    await projectLoad();
    burger.style.visibility="visible";
  }
 
  handleNavigation();
}