async function toDoListLink_Click() {
    await render(toDoListsPage());
    const toDoListTable = document.getElementById('toDoListTable');
    const items = await ToDoRepository.getAll();
  
    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];

            const tr = document.createElement('TR');
            tr.className='data-container';
           
            const idTd = document.createElement('TD');
            idTd.innerHTML = currentItem.id; 

            const titleTd = document.createElement('TD');
            titleTd.innerHTML = currentItem.title;
            
            const taskCountTd = document.createElement('TD');
            let currentItemCount = await taskCount(currentItem.id);
            taskCountTd.innerHTML = currentItemCount;

            const dateOfCreationTd = document.createElement('TD');
            dateOfCreationTd.innerHTML = await currentTime(currentItem.createDate);

            const creatorIdTd = document.createElement('TD');
            creatorIdTd.innerHTML = currentItem.creatorId;

            const editDateTd = document.createElement('TD');
            editDateTd.innerHTML = await currentTime(currentItem.updateDate);
            
            const editedByIdTd = document.createElement('TD');
            editedByIdTd.innerHTML = currentItem.updaterId;
            
        
            const detailsTd = document.createElement('TD');
            const detailsButton = document.createElement('BUTTON');
            detailsButton.className = 'details-button';
            detailsButton.innerHTML = 'TASKS';
            detailsButton.addEventListener('click', () => listsDetailsButton_Clcik(currentItem.id));
            detailsTd.appendChild(detailsButton);

            const editTd = document.createElement('TD');
            const editButton = document.createElement('BUTTON');
            editButton.className = 'edit-button';
            editButton.innerHTML = 'EDIT/SHARE';
            editButton.addEventListener('click', () => listsEditButton_Click(currentItem));
            editTd.appendChild(editButton);

            const deleteTd = document.createElement('TD');
            const deleteButton = document.createElement('BUTTON');
            deleteButton.className = 'delete-button';
            deleteButton.innerHTML = 'DELETE';
            deleteButton.addEventListener('click', () => listsDeleteButton_Click(currentItem));
            deleteTd.appendChild(deleteButton);
            tr.appendChild(idTd);
            tr.appendChild(titleTd);
            tr.appendChild(taskCountTd);
            tr.appendChild(dateOfCreationTd);
            tr.appendChild(creatorIdTd);
            tr.appendChild(editDateTd);
            tr.appendChild(editedByIdTd);
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

async function listsEditLink_Click(currentItem) { 
    if(typeof currentItem == 'undefined'){
        render(toDoListNewPage());
    } else {
        render(toDoListEditPage());
    }
}

async function listsEditButton_Click(currentItem) {
    await listsEditLink_Click(currentItem);
    const item = await ToDoRepository.getById(currentItem.id);
    document.getElementById('id').value = item.id;
    document.getElementById('title').value = item.title;
}

async function listsNewForm_Submit() {
    const title = document.getElementById('title').value;
    const item = new ToDoList(title);
    await ToDoRepository.addItem(item);

    await toDoListLink_Click();
}

async function listsEditForm_Submit() {
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const shareWith = document.getElementById('sharedWith').value;

    const item = new ToDoList(title);
  
    await ToDoRepository.editItem(id, item);
    
    if(shareWith!="" ){
        await ToDoRepository.shareItem(id, shareWith);
    }

    await toDoListLink_Click();
}

async function listsDeleteButton_Click(currentItem) {
        let confirmation = confirm("Are you sure you want to delete this list? All of the tasks will be removed as well!"); 
    
        if (confirmation==true){
            await ToDoRepository.deleteItem(currentItem.id);
            toDoListLink_Click();
        } 
}

