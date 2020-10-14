
import { MAIN_CONTENT_SELECTOR } from '../utils/constants';
import { modal, render } from '../utils/helpers';
import usersPage from '../views/pages/usersPage';
import usersEditPage from '../views/components/users/usersEditPage'
import UsersService from '../services/userService';
import User from '../entities/user';
import deletePage from '../views/pages/deletePage';

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
    const { id, username, firstName, lastName } = currentItem;
    const row: HTMLElement = document.createElement('tr') as HTMLElement;
    row.className = "data-container hover";
    row.setAttribute('title', `ID: ${id}`);
    row.innerHTML = `
        <td class="data-field">${firstName}</td>
        <td class="data-field">${lastName}</td>
        <td class="data-field">${username}</td>
        <td colspan="2" class="data-field button-list">
          <button class="edit-button" title="Edit user"></button>
          <button class="delete-button" title="Delete contact"></button>
        </td>
    `;

    (row.querySelector('.edit-button') as HTMLButtonElement)
      .addEventListener('click', () => editUser(id));

    (row.querySelector('.delete-button') as HTMLButtonElement)
      .addEventListener('click', () => deleteUser(id));
  
    return row;
}
  

export function createNewUser(): void {
    modal(usersEditPage());
}
  

export async function editUser(id: string): Promise<void> {
    modal(usersEditPage());
    const item:User = await UsersService.getById(id);
   
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('username') as HTMLInputElement).value = item.username;
    (document.getElementById('firstName') as HTMLInputElement).value = item.firstName;
    (document.getElementById('lastName') as HTMLInputElement).value = item.lastName;
    (document.getElementById('isAdmin') as HTMLInputElement).checked = item.isAdmin;
}

export async function usersEditForm_Submit(): Promise<void> {
    event.preventDefault();
    const id: string = (document.getElementById('id') as HTMLInputElement).value;
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    const firstName:string = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName:string = (document.getElementById('lastName') as HTMLInputElement).value;
    const isAdmin: boolean = Boolean((document.getElementById('isAdmin') as HTMLInputElement).checked);
    const item: User = new User(username, password, firstName, lastName, isAdmin);

    if (id == "") {
        await UsersService.addItem(item);
    } else {
        await UsersService.editItem(id, item);
    }

    await loadUsers();
}

export function deleteUser(id:string): void{
  modal(deletePage());
  const message = "Are you sure you want to delete this user?";
  const deleteBtn: HTMLButtonElement = document.getElementById('deleteBtn')as HTMLButtonElement;
  deleteBtn.removeEventListener;

  (document.querySelector('.delete-message') as HTMLInputElement).innerHTML = message;
  deleteBtn.addEventListener('click', () => deleteConfirm(id));
}

export async function deleteConfirm(id:string): Promise<void>{
  await UsersService.deleteItem(id); 
  await loadUsers();  
}
