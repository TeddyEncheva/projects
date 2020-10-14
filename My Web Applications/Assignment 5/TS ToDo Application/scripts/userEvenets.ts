import {currentTime, render} from './events';
import {usersPage, usersEditPage} from './views/users/';
import UsersRepository from './repositories/userRepo';
import User from './entities/user';

export async function usersLink_Click() {
    render(usersPage());
    const usersTable = document.getElementById('usersTable') as HTMLElement;
    const items = await UsersRepository.getAll();

    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];

        const tr = document.createElement('TR');
        tr.className='data-container';
        
        const userIdTd = document.createElement('TD');
        userIdTd.innerHTML = currentItem.id;

        const usernameTd = document.createElement('TD');
        usernameTd.innerHTML = currentItem.username;

        const firstNameTd = document.createElement('TD');
        firstNameTd.innerHTML = currentItem.firstName;

        const lastNameTd = document.createElement('TD');
        lastNameTd.innerHTML = currentItem.lastName;

        const isAdminTd = document.createElement('TD');
        isAdminTd.innerHTML = currentItem.isAdmin;
        
        const dateOfCreationTd = document.createElement('TD');
        dateOfCreationTd.innerHTML = await currentTime(currentItem.createDate);
        
        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentItem.creatorId;
        
        const editDateTd = document.createElement('TD');
        editDateTd.innerHTML = await currentTime(currentItem.updateDate);
        

        const editedByIdTd = document.createElement('TD');
        editedByIdTd.innerHTML = currentItem.updaterId;
       
        const editTd = document.createElement('TD');
        const editButton = document.createElement('BUTTON');
        editButton.className = 'edit-button';

        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () => usersEditButton_Click(currentItem.id));
        editTd.appendChild(editButton);

        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => usersDeleteButton_Click(currentItem.id));
        deleteTd.appendChild(deleteButton);

        tr.appendChild(userIdTd);
        tr.appendChild(usernameTd);
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(isAdminTd);
        tr.appendChild(dateOfCreationTd);
        tr.appendChild(creatorIdTd);
        tr.appendChild(editDateTd);
        tr.appendChild(editedByIdTd);
        tr.appendChild(editTd);
        tr.appendChild(deleteTd);

        const dataFields = tr.childNodes;
        dataFields.forEach(field => {
            (field as HTMLElement).className = 'data-field';
        });

        usersTable.appendChild(tr);
    }
}

export async function usersEditLink_Click() {
    render(usersEditPage());
}

export async function usersEditButton_Click(id: number) {
    usersEditLink_Click();
    const item = await UsersRepository.getById(id);
   
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('username') as HTMLInputElement).value = item.username;
    (document.getElementById('firstName') as HTMLInputElement).value = item.firstName;
    (document.getElementById('lastName') as HTMLInputElement).value = item.lastName;
    (document.getElementById('isAdmin') as HTMLInputElement).checked = item.isAdmin;
}

export async function usersEditForm_Submit() {
    const id = Number((document.getElementById('id') as HTMLInputElement).value);
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const isAdmin = Boolean((document.getElementById('isAdmin') as HTMLInputElement).checked);
    const item = new User(username, password, firstName, lastName, isAdmin);

    if (id == 0) {
        await UsersRepository.addItem(item);
    } else {
        await UsersRepository.editItem(id, item);
    }

    await usersLink_Click();
}

export async function usersDeleteButton_Click(id: number) {
    let confirmation = confirm("Do you really want to remove this user?");
    if (confirmation==true){
    await UsersRepository.deleteItem(id);
    await usersLink_Click();
    } 
}
