async function listsDetailsButton_Clcik(id) {

    await render(toDoListDetailsPage());
    document.getElementById('newTaskLink').addEventListener('click', () => tasksEditLink_Click(id));

    const item = await ToDoRepository.getById(id);
    const user = await UsersRepository.getById(item._userId);

    document.getElementById('userId').innerHTML = user._username;
    document.getElementById('title').innerHTML = item._title;
   

    const tasksTable = document.getElementById('tasksTable');
    const tasks = await TasksRepository.getByParentId(item._id);
    
    if (tasks == null)
        return [];

    for (let i = 0; i < tasks.length; i++) {
        const currentItem = tasks[i];
    
        const tr = document.createElement('TR');
        tr.className='data-container';

        const taskTd = document.createElement('TD');
        taskTd.innerHTML = currentItem._task;

        const detailsTd = document.createElement('TD');
        detailsTd.innerHTML = currentItem._details;

        const isCompletedTd = document.createElement('TD');
        isCompletedTd.innerHTML = currentItem._isCompleted;

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
        editButton.addEventListener('click', () => tasksEditButton_Click(currentItem._id));
        editTd.appendChild(editButton);

        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => tasksDeleteButton_Click(currentItem._id, id));
        deleteTd.appendChild(deleteButton);

        tr.appendChild(taskTd);
        tr.appendChild(detailsTd);
        tr.appendChild(isCompletedTd);
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
        tasksTable.appendChild(tr);
    }
}

async function tasksEditLink_Click(listId) {
    await render(tasksEditPage());
    document.getElementById('listId').value = listId;
}

async function tasksEditButton_Click(id) {
    await tasksEditLink_Click();
    const item = await TasksRepository.getById(id);

    document.getElementById('id').value = item._id;
    document.getElementById('listId').value = item._listId;
    document.getElementById('task').value = item._task;
    document.getElementById('details').value = item._details;
    document.getElementById('isCompleted').checked = item._isCompleted;
}

async function tasksEditForm_Submit() {
    const today = await currentTime();
    const currentlyLogged = await AuthenticationService.getLoggedUser();
    const id = document.getElementById('id').value;
    const listId = document.getElementById('listId').value;
    const task = document.getElementById('task').value;
    const details = document.getElementById('details').value;
    const isCompleted = document.getElementById('isCompleted').checked;

    const item = new Task(listId, task, details, isCompleted);

    if (id == "") {
        item._editDate = "No Edits";
        item._editor = "No Edits";
        item._creationDate = today;
        item._creator = currentlyLogged._id;
        await TasksRepository.addTask(item);
    } else {
        item._editDate = today;
        item._editor = currentlyLogged._id;
        await TasksRepository.editTask(id, item);
    }

    await listsDetailsButton_Clcik(listId);
}

async function tasksDeleteButton_Click(id, parentId) {
    let confimation = confirm("Are you sure you want to delete this task?");
    if(confimation==true){
    await TasksRepository.deleteTask(id);
    await listsDetailsButton_Clcik(parentId);
    }
}