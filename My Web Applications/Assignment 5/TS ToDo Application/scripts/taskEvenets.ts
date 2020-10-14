import  { render, currentTime } from './events';
import Task from './entities/task';
import TaskRepository from './repositories/taskRepo';
import { toDoListDetailsPage } from './views/toDoLists/';
import { tasksNewPage, tasksEditPage } from './views/tasks';
import User from './entities/user';

export async function listsDetailsButton_Click(id: number) {
    render(toDoListDetailsPage());
    const newTaskLink = document.getElementById('newTaskLink') as HTMLElement;
    newTaskLink.addEventListener('click', () => tasksNewLink_Click(id));

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
            (field as HTMLElement).className = 'data-field';
        });
        tasksTable.appendChild(tr);
    }
}

export function readThroughAssignees(assignees:Array<User>): string{
    const assigneesList =[];
    for (let i = 0; i < assignees.length; i++) {
        const assignee = assignees[i];
        assigneesList.push(
            `ID: ${assignee.id} username:  ${assignee.username}
`);  
    }
    return String(assigneesList);
}

export async function tasksNewLink_Click(id:number){
    render(tasksNewPage());
    (document.getElementById('listId') as HTMLInputElement).value = String(id);
}

export function tasksEditLink_Click() {
    render(tasksEditPage());
} 

export async function tasksEditButton_Click(id:number) {
    tasksEditLink_Click();

    const item = await TaskRepository.getById(id);

    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('listId') as HTMLInputElement).value = item.taskListId;
    (document.getElementById('task') as HTMLInputElement).value = item.title;
    (document.getElementById('details') as HTMLInputElement).value = item.description;
    (document.getElementById('isCompleted') as HTMLInputElement).checked = item.isComplete;
}

export async function tasksNewForm_Submit() {
    const listId = Number((document.getElementById('listId') as HTMLInputElement).value);
    const title = (document.getElementById('task') as HTMLInputElement).value;
    const description = (document.getElementById('details') as HTMLInputElement).value;
    const isComplete = Boolean((document.getElementById('isCompleted') as HTMLInputElement).checked);
   
    const item = new Task(title, description, isComplete);
 
    await TaskRepository.addItem(item);
    
    listsDetailsButton_Click(listId);
}

export async function tasksEditForm_Submit() {
    const id = Number((document.getElementById('id') as HTMLInputElement).value);
    const listId = Number((document.getElementById('listId') as HTMLInputElement).value);
    const title = (document.getElementById('task') as HTMLInputElement).value;
    const description = (document.getElementById('details') as HTMLInputElement).value;
    const isComplete = Boolean((document.getElementById('isCompleted') as HTMLInputElement).checked);
    const assignUser = Number((document.getElementById('assignee') as HTMLInputElement).value);

    const item = new Task(title, description, isComplete);

    await TaskRepository.editItem(id, item);

    if(assignUser != null ){
        await TaskRepository.assignUser(id, assignUser);
    }

     listsDetailsButton_Click(listId);
}

export async function tasksDeleteButton_Click(id: number, listId: number) {
    let confimation = confirm("Are you sure you want to delete this task?");
    if(confimation==true){
    await TaskRepository.deleteItem(id);
    await listsDetailsButton_Click(listId);
    }
}