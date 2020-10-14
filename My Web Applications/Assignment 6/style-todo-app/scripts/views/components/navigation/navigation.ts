import { loadUsers } from '../../../controllers/userController';
import { toDoLoad } from '../../../controllers/toDoController';
import { logout } from '../../../controllers/loginController';

export default function navigation() {
  return {
    template: `
    <nav class="header-menu">
          <ul>
            <li id="toDoLink" class="list-element">
                <a class="nav-link">Home</a>
            </li>
            <li id="usersLink" class="list-element">
                <a class="nav-link">Users</a>
            </li>
            <li id="logoutLink" class="list-element">
                <a class="nav-link">Sign out</a>
            </li>
          </ul>
    </nav>`,
    listeners: [
      {
        targetId: 'usersLink',
        eventType: 'click',
        callback: loadUsers
      }, {
        targetId: 'toDoLink',
        eventType: 'click',
        callback: toDoLoad
      }, {
        targetId: 'logoutLink',
        eventType: 'click',
        callback: logout
      }
    ]
  };
}