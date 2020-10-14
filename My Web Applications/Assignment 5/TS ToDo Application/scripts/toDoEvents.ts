import {currentTime, render} from './events';
import {toDoListsPage, toDoListNewPage, toDoListEditPage} from './views/toDoLists/';
import ToDoRepository from './repositories/listRepo';
import TaskRepository from './repositories/taskRepo';
import { listsDetailsButton_Click } from './taskEvenets';
import ToDoList from './entities/todo';

export async function toDoListLink_Click() {
    render(toDoListsPage());
    const toDoListTable = document.getElementById('toDoListTable') as HTMLElement;
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
            detailsButton.addEventListener('click', () => listsDetailsButton_Click(Number(currentItem.id)));
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
                (field as HTMLElement).className = 'data-field';
            });

            toDoListTable.appendChild(tr);
        }
}

export const taskCount = async function(listId:number): Promise<any>{
    await TaskRepository.updateUrl(listId);
    const tasks = await TaskRepository.getAll();
    const count = tasks.length;
    return count;
}

export async function listsNewLink_Click() { 
        render(toDoListNewPage());
}


export async function listsEditLink_Click() { 
        render(toDoListEditPage());
}

export async function listsEditButton_Click(currentItem: ToDoList) {
    await listsEditLink_Click();
    const item = await ToDoRepository.getById(currentItem.id);
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('title') as HTMLInputElement).value = item.title;
}

export async function listsNewForm_Submit() {
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const item = new ToDoList(title);
    await ToDoRepository.addItem(item);

    await toDoListLink_Click();
}

export async function listsEditForm_Submit() {
    const id = Number((document.getElementById('id') as HTMLInputElement).value);
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const shareWith = Number((document.getElementById('sharedWith') as HTMLInputElement).value);

    const item = new ToDoList(title);
  
    await ToDoRepository.editItem(id, item);
    
    if(shareWith != null ){
        await ToDoRepository.shareItem(id, shareWith);
    }

    await toDoListLink_Click();
}

export async function listsDeleteButton_Click(currentItem: ToDoList) {
        let confirmation = confirm("Are you sure you want to delete this list? All of the tasks will be removed as well!"); 
    
        if (confirmation==true){
            await ToDoRepository.deleteItem(currentItem.id);
            toDoListLink_Click();
        } 
}

