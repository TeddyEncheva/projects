async function usersLink_Click() {
    await render(usersPage());
    const usersTable = document.getElementById('usersTable');
    const items = await UsersRepository.getAll();

    if (items == null)
        return [];
        
    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];

        const tr = document.createElement('TR');
        tr.className='data-container';
        
        const userIdTd = document.createElement('TD');
        userIdTd.innerHTML = currentItem._id;

        const usernameTd = document.createElement('TD');
        usernameTd.innerHTML = currentItem._username;

        const passwordTd = document.createElement('TD');
        passwordTd.innerHTML = currentItem._password;

        const firstNameTd = document.createElement('TD');
        firstNameTd.innerHTML = currentItem._firstName;

        const lastNameTd = document.createElement('TD');
        lastNameTd.innerHTML = currentItem._lastName;

        const isAdminTd = document.createElement('TD');
        isAdminTd.innerHTML = currentItem._isAdmin;
        
        const dateOfCreationTd = document.createElement('TD');
        dateOfCreationTd.innerHTML = currentItem._creationDate;
        
        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentItem._creator;
        
        const editDateTd = document.createElement('TD');
        editDateTd.innerHTML = currentItem._editDate;
        

        const editedByIdTd = document.createElement('TD');
        editedByIdTd.innerHTML = currentItem._editor;
       
        const editTd = document.createElement('TD');
        const editButton = document.createElement('BUTTON');
        editButton.className = 'edit-button';

        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () => usersEditButton_Click(currentItem._id));
        editTd.appendChild(editButton);

        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => usersDeleteButton_Click(currentItem._id));
        deleteTd.appendChild(deleteButton);

        tr.appendChild(userIdTd);
        tr.appendChild(usernameTd);
        tr.appendChild(passwordTd);
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
   
    document.getElementById('id').value = item._id;
    document.getElementById('username').value = item._username;
    document.getElementById('password').value = item._password;
    document.getElementById('firstName').value = item._firstName;
    document.getElementById('lastName').value = item._lastName;
    document.getElementById('isAdmin').checked = item._isAdmin;
}

async function usersEditForm_Submit() {
    const currentlyLogged = await AuthenticationService.getLoggedUser();
    const today = await currentTime();
    const id = document.getElementById('id').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const isAdmin = document.getElementById('isAdmin').checked;
    const item = new User(username, password, firstName, lastName, isAdmin);

    if (id == "") {
        item._editDate = "No Edits";
        item._editor = "No Edits";
        item._creationDate = today;
        item._creator = currentlyLogged._id;
        await UsersRepository.addUser(item);
    } else {
        item._editDate = today;
        item._editor = currentlyLogged._id;
        await UsersRepository.editUser(id, item);
    }

    await usersLink_Click();
}

async function usersDeleteButton_Click(id) {
    let confirmation = confirm("Do you really want to remove this user?");
    if (confirmation==true){
    await UsersRepository.deleteUser(id);
    await usersLink_Click();
    } 
}
