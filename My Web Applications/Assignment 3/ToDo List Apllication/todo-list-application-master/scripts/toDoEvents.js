async function toDoListLink_Click() {
    await render(toDoListsPage());
    const toDoListTable = document.getElementById('toDoListTable');

    const items = await ToDoRepository.getAll();
    
    if (items == null)
        return [];
        
    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];
        const currentUser = await AuthenticationService.getLoggedUser();
        const user = await UsersRepository.getById(currentItem._userId);

        if(user._id == currentUser._id || currentUser._isAdmin ===true || await checkIfShared(currentItem)){
            const tr = document.createElement('TR');
            tr.className='data-container';
            
            const usernameTd = document.createElement('TD');
            usernameTd.innerHTML = user._username;

            const idTd = document.createElement('TD');
            idTd.innerHTML = currentItem._id; 

            const titleTd = document.createElement('TD');
            titleTd.innerHTML = currentItem._title;
            
            const taskCountTd = document.createElement('TD');
            let currentItemCount = await taskCount(currentItem._id);
            taskCountTd.innerHTML = currentItemCount;

            const dateOfCreationTd = document.createElement('TD');
            dateOfCreationTd.innerHTML = currentItem._creationDate;

            const creatorIdTd = document.createElement('TD');
            creatorIdTd.innerHTML = currentItem._userId;

            const editDateTd = document.createElement('TD');
            editDateTd.innerHTML = currentItem._editDate;
            
            const editedByIdTd = document.createElement('TD');
            editedByIdTd.innerHTML = currentItem._editor;
            
            const shareWithTd = document.createElement('TD');
            shareWithTd.innerHTML = currentItem._shareWith;
        
            const detailsTd = document.createElement('TD');
            const detailsButton = document.createElement('BUTTON');
            detailsButton.className = 'details-button';
            detailsButton.innerHTML = 'TASKS';
            detailsButton.addEventListener('click', () => listsDetailsButton_Clcik(currentItem._id));
            detailsTd.appendChild(detailsButton);

            const editTd = document.createElement('TD');
            const editButton = document.createElement('BUTTON');
            editButton.className = 'edit-button';
            editButton.innerHTML = 'EDIT';
            editButton.addEventListener('click', () => listsEditButton_Click(currentItem));
            editTd.appendChild(editButton);

            const deleteTd = document.createElement('TD');
            const deleteButton = document.createElement('BUTTON');
            deleteButton.className = 'delete-button';
            deleteButton.innerHTML = 'DELETE';
            deleteButton.addEventListener('click', () => listsDeleteButton_Click(currentItem));
            deleteTd.appendChild(deleteButton);

            

            tr.appendChild(usernameTd);
            tr.appendChild(titleTd);
            tr.appendChild(taskCountTd);
            tr.appendChild(dateOfCreationTd);
            tr.appendChild(creatorIdTd);
            tr.appendChild(editDateTd);
            tr.appendChild(editedByIdTd);
            tr.appendChild(shareWithTd);
            tr.appendChild(detailsTd);
            tr.appendChild(editTd);
            tr.appendChild(deleteTd);
            
            const dataFields = tr.childNodes;
            dataFields.forEach(field => {
                field.className = 'data-field';
            });

            toDoListTable.appendChild(tr);
        }
    }
}

async function listsEditLink_Click(currentItem) {
    if(currentItem !=undefined){
    handleSharing(currentItem._userId);
    }
    
    render(toDoListEditPage());
    const loggedUser = await AuthenticationService.getLoggedUser();
    document.getElementById('userId').value = loggedUser._id;
   
    await buildOptionList();
}

async function listsEditButton_Click(currentItem) {
    await listsEditLink_Click(currentItem);
    const item = await ToDoRepository.getById(currentItem._id);
    document.getElementById('id').value = item._id;
    document.getElementById('userId').value = item._userId;
    document.getElementById('title').value = item._title;
    await showSelected(item._shareWith, item._userId);
}

async function getItemShareList(itemId){
    const toDoList = await ToDoRepository.getById(itemId);
    const shareList = toDoList._shareWith;
    return shareList;
}

async function listsEditForm_Submit() {
    const today = await currentTime();
    const id = document.getElementById('id').value;
    const userId = document.getElementById('userId').value;
    const title = document.getElementById('title').value;
    const currentlyLogged = await AuthenticationService.getLoggedUser();
    let shareWith = await getSelectedOption(); 
        
    if(id!="" && userId != currentlyLogged._id && currentlyLogged._isAdmin != true){
        shareWith = await getItemShareList(id);
    } 

    const item = new ToDoList(userId, title, shareWith);
   
    if (id == "") {
        item._editDate = "No Edits";
        item._editor = "No Edits";
        item._creationDate = today;
        await ToDoRepository.addList(item);
    } else {
        item._editDate = today;
        item._editor = currentlyLogged._id;
        await ToDoRepository.editList(id, item);
    }

    await toDoListLink_Click();
}

async function listsDeleteButton_Click(currentItem) {
    if(await checkIfShared(currentItem)){
        let confirmation = confirm("Are you sure you no longer want this list shared with you?"); 

        if(confirmation==true){
           await removeFromShared(currentItem);
            toDoListLink_Click();
        }
    }else{
        let confirmation = confirm("Are you sure you want to delete this list? All of the tasks will be removed as well!"); 
    
        if (confirmation==true){
            await TasksRepository.deleteListTasks(currentItem._id);
            await ToDoRepository.deleteList(currentItem._id);
            toDoListLink_Click();
        } 
    }
}

