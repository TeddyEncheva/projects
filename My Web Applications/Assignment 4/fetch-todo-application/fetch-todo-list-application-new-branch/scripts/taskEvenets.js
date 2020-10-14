async function listsDetailsButton_Clcik(id) {
    await render(toDoListDetailsPage());
    document.getElementById('newTaskLink').addEventListener('click', () => tasksNewLink_Click(id));

    const tasksTable = document.getElementById('tasksTable');

    TaskRepository.updateUrl(id)
      
    const tasks = await TaskRepository.getAll();

    for (let i = 0; i < tasks.length; i++) {
        const currentItem = tasks[i];
        
        const tr = document.createElement('TR');
        tr.className='data-container';

        const idTd = document.createElement('TD');
        idTd.innerHTML = currentItem.id; 

        const taskTd = document.createElement('TD');
        taskTd.innerHTML = currentItem.title;

        const detailsTd = document.createElement('TD');
        detailsTd.innerHTML = currentItem.description;

        const isCompletedTd = document.createElement('TD');
        isCompletedTd.innerHTML = currentItem.isComplete;

        const dateOfCreationTd = document.createElement('TD');
        dateOfCreationTd.innerHTML = await currentTime(currentItem.createDate);

        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentItem.creatorId;

        const editDateTd = document.createElement('TD');
        editDateTd.innerHTML = await currentTime(currentItem.updateDate);
        

        const editedByIdTd = document.createElement('TD');
        editedByIdTd.innerHTML = currentItem.updaterId;

        const assignToTd = document.createElement('TD');
        const assignees = await TaskRepository.getTaskAssignees(currentItem.id);
        assignToTd.innerHTML = readThroughAssignees(assignees);

        const editTd = document.createElement('TD');
        const editButton = document.createElement('BUTTON');
        editButton.className = 'edit-button';
        editButton.innerHTML = 'EDIT/ASSIGN';
        editButton.addEventListener('click', () => tasksEditButton_Click(currentItem.id));
        editTd.appendChild(editButton);

        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => tasksDeleteButton_Click(currentItem.id, id));
        deleteTd.appendChild(deleteButton);

        tr.appendChild(idTd);
        tr.appendChild(taskTd);
        tr.appendChild(detailsTd);
        tr.appendChild(isCompletedTd);
        tr.appendChild(dateOfCreationTd);
        tr.appendChild(creatorIdTd);
        tr.appendChild(editDateTd);
        tr.appendChild(editedByIdTd);
        tr.appendChild(assignToTd); 
        tr.appendChild(editTd);
        tr.appendChild(deleteTd);
       
        const dataFields = tr.childNodes;
        dataFields.forEach(field => {
            field.className = 'data-field';
        });
        tasksTable.appendChild(tr);
    }
}

function readThroughAssignees(assignees){
    const assigneesList =[];
    for (let i = 0; i < assignees.length; i++) {
        const assignee = assignees[i];
        assigneesList.push(
            `ID: ${assignee.id} username:  ${assignee.username}
`);  
    }
    return assigneesList;
}

async function tasksNewLink_Click(id){
    render(tasksNewPage());
    document.getElementById('listId').value = id;
}

async function tasksEditLink_Click() {
    render(tasksEditPage());
} 

async function tasksEditButton_Click(id) {
    await tasksEditLink_Click();

    const item = await TaskRepository.getById(id);

    document.getElementById('id').value = item.id;
    document.getElementById('listId').value = item.taskListId;
    document.getElementById('task').value = item.title;
    document.getElementById('details').value = item.description;
    document.getElementById('isCompleted').checked = item.isComplete;
}

async function tasksNewForm_Submit() {
    const listId = document.getElementById('listId').value;
    const title = document.getElementById('task').value;
    const description = document.getElementById('details').value;
    const isComplete = document.getElementById('isCompleted').checked;
   
    const item = new Task(title, description, isComplete);
 
    await TaskRepository.addItem(item);
    
    await listsDetailsButton_Clcik(listId);
}

async function tasksEditForm_Submit() {
    const id = document.getElementById('id').value;
    const listId = document.getElementById('listId').value;
    const title = document.getElementById('task').value;
    const description = document.getElementById('details').value;
    const isComplete = document.getElementById('isCompleted').checked;
    const assignUser = document.getElementById('assignee').value;

    const item = new Task(title, description, isComplete);

    await TaskRepository.editItem(id, item);

    if(assignUser!="" ){
        await TaskRepository.assignUser(id, assignUser);
    }
      await listsDetailsButton_Clcik(listId);
}

async function tasksDeleteButton_Click(id, listId) {
    let confimation = confirm("Are you sure you want to delete this task?");
    if(confimation==true){
    await TaskRepository.deleteItem(id);
    await listsDetailsButton_Clcik(listId);
    }
}