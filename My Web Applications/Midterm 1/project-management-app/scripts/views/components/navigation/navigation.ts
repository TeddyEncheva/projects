import { logout } from '../../../controllers/loginController';
import { projectLoad } from '../../../controllers/projectController';
import { loadUsers } from '../../../controllers/userController';
import { teamLoad } from '../../../controllers/teamController';
import { closeNav } from '../../../utils/helpers';

export default function navigation() {
  return {
    template: `
    <div class="dark-background">
      <nav class="header-menu">
        <div id="logo">
          <img src="../../../../images/ic_polymer_24px.svg"/>
          <h3>AppStack<h3>
        </div>
        <button id="navClose">&#x2715;</button>
            <ul>
              <li id="projectsLink" class="list-element">
                  <img src="../../../../images/ic_home_24px.svg"/>
                  <a class="nav-link">Projects</a>
              </li>
              <li id="usersLink" class="list-element">
                  <img src="../../../../images/ic_users_24px.svg"/>
                  <a class="nav-link">Users</a>
              </li>
              <li id="teamsLink" class="list-element">
                  <img src="../../../../images/ic_teams_ind_24px.svg"/>
                  <a class="nav-link">Teams</a>
              </li>
              <li id="logoutLink" class="list-element">
                  <img src="../../../../images/exit_to_app-black-18dp.svg"/>
                  <a class="nav-link">Log out</a>
              </li>
            </ul>
      </nav>
    </div>`,
    listeners: [
      {
        targetId: 'logoutLink',
        eventType: 'click',
        callback: logout
      },
      {
        targetId: 'projectsLink',
        eventType: 'click',
        callback: projectLoad
      },

      {
        targetId: 'logo',
        eventType: 'click',
        callback: projectLoad
      },
      {
        targetId: 'usersLink',
        eventType: 'click',
        callback: loadUsers
      },
      {
        targetId: 'teamsLink',
        eventType: 'click',
        callback: teamLoad
      },
      {
        targetId: 'navClose',
        eventType: 'click',
        callback: closeNav
      }
    ]
  };
}