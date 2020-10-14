
import { MAIN_CONTENT_SELECTOR } from '../utils/constants';
import { timeFilter, render } from '../utils/helpers';
import usersPage from '../views/pages/usersPage';

import usersEditPage from '../views/components/users/usersEditPage';
import UsersService from '../services/userService';
import User from '../entities/user';

export async function loadUsers(): Promise<void> {
    render(MAIN_CONTENT_SELECTOR, usersPage());
  
    const usersTable: HTMLElement = document.getElementById('usersTable') as HTMLElement;
    const items: Array<User> = await UsersService.getAll();
  
    if (!items) {
      return;
    }
  
    for (const currentItem of items) {
      usersTable.appendChild(generateUsersRow(currentItem));
    }
  }
  
  
function generateUsersRow(currentItem: User): HTMLElement {
    const { id, username, firstName, lastName, createDate, updateDate } = currentItem;
    const row: HTMLElement = document.createElement('tr');
    row.className = "data-container";
    const createDateFiltered =  timeFilter(createDate);
    const updateDateFiltered = timeFilter(updateDate);
    row.innerHTML = `
        <td class="data-field">${firstName}</td>
        <td class="data-field">${lastName}</td>
        <td class="data-field">${username}</td>
        <td class="data-field hide">${createDateFiltered}</td>
        <td class="data-field hide">${updateDateFiltered}</td>
        <td colspan="2" class="button-list data-field">
          <a class="edit-button" title="Edit user"></a>
          <a class="delete-button" title="Delete contact"></a>
        </td>
    `;


    row.querySelector('.edit-button')
      .addEventListener('click', () => editUser(id));
    row.querySelector('.delete-button')
      .addEventListener('click', () => deleteUser(id));
  
    return row;
  }
  

  export function createNewUser(): void {
    render(MAIN_CONTENT_SELECTOR, usersEditPage());
  }
  

export async function editUser(id: number): Promise<void> {
    render(MAIN_CONTENT_SELECTOR, usersEditPage());
    const item = await UsersService.getById(id);
   
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('username') as HTMLInputElement).value = item.username;
    (document.getElementById('firstName') as HTMLInputElement).value = item.firstName;
    (document.getElementById('lastName') as HTMLInputElement).value = item.lastName;
    (document.getElementById('isAdmin') as HTMLInputElement).checked = item.isAdmin;
}

export async function usersEditForm_Submit(): Promise<void> {
    const id: number = Number((document.getElementById('id') as HTMLInputElement).value);
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    const firstName:string = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName:string = (document.getElementById('lastName') as HTMLInputElement).value;
    const isAdmin: boolean = Boolean((document.getElementById('isAdmin') as HTMLInputElement).checked);
    const item: User = new User(username, password, firstName, lastName, isAdmin);

    if (id == 0) {
        await UsersService.addItem(item);
    } else {
        await UsersService.editItem(id, item);
    }

    await loadUsers();
}

export async function deleteUser(id: number): Promise<void> {
    let confirmation = confirm("Do you really want to remove this user?");
    if (confirmation==true){
    await UsersService.deleteItem(id);
    await loadUsers();
    } 
}
