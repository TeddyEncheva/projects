async function usersLink_Click() {
    await render(usersPage());
    const usersTable = document.getElementById('usersTable');
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
            field.className = 'data-field';
        });

        usersTable.appendChild(tr);
    }
}

async function usersEditLink_Click() {
    await render(usersEditPage());
}

async function usersEditButton_Click(id) {

    await usersEditLink_Click();
    const item = await UsersRepository.getById(id);
   
    document.getElementById('id').value = item.id;
    document.getElementById('username').value = item.username;
    document.getElementById('firstName').value = item.firstName;
    document.getElementById('lastName').value = item.lastName;
    document.getElementById('isAdmin').checked = item.isAdmin;
}

async function usersEditForm_Submit() {
    const id = document.getElementById('id').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const isAdmin = document.getElementById('isAdmin').checked;
    const item = new User(username, password, firstName, lastName, isAdmin);

    if (id == "") {
        await UsersRepository.addItem(item);
    } else {
        await UsersRepository.editItem(id, item);
    }

    await usersLink_Click();
}

async function usersDeleteButton_Click(id) {
    let confirmation = confirm("Do you really want to remove this user?");
    if (confirmation==true){
    await UsersRepository.deleteItem(id);
    await usersLink_Click();
    } 
}
