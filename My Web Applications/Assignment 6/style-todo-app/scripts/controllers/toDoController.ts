import {timeFilter, render} from '../utils/helpers';
import {toDoListNewPage, toDoListEditPage} from '../views/components/toDoLists';
import toDoListsPage from '../views/pages/toDoListsPage';
import ToDoService from '../services/listService';
import TaskService from '../services/taskService';
import { tasksLoad } from './taskController';
import ToDoList from '../entities/todo';
import { MAIN_CONTENT_SELECTOR } from '../utils/constants'

export async function toDoLoad(): Promise<void> {
    render(MAIN_CONTENT_SELECTOR, toDoListsPage());
    const toDoListTable:HTMLElement = document.getElementById('toDoListTable') as HTMLElement;
    const items: Array<ToDoList> = await ToDoService.getAll();
    
    for (const currentItem of items) {
        toDoListTable.appendChild(generateUsersRow(currentItem));
      }
    }

function generateUsersRow(currentItem: ToDoList): HTMLElement{
        const { id, title, createDate, updateDate } = currentItem;
        const row: HTMLElement = document.createElement('tr');
        row.className = "data-container";
        const createDateFiltered =  timeFilter(createDate);
        const updateDateFiltered = timeFilter(updateDate);

        row.innerHTML = `
        <td class="data-field">${title}</td>
        <td class="data-field">${createDateFiltered}</td>
        <td class="data-field hide">${updateDateFiltered}</td>
        <td colspan="3" class="data-field button-list">
          <a class="tasks-button" title="Open tasks"></a>
          <a class="edit-button" title="Edit list"></a>
          <a class="delete-button" title="Delete list"></a>
        </td>
    `;
   
    row.querySelector('.tasks-button')
    .addEventListener('click', () => tasksLoad(id))
    row.querySelector('.edit-button')
    .addEventListener('click', () => listEdit(id));
    row.querySelector('.delete-button')
    .addEventListener('click', () => listDelete(id));

  return row;
    }
    

export const taskCount = async function(listId:number): Promise<any>{
    await TaskService.updateUrl(listId);
    const tasks = await TaskService.getAll();
    const count = tasks.length;
    return count;
}

export function listsNewLink_Click(): void { 
        render(MAIN_CONTENT_SELECTOR, toDoListNewPage());
}


export function listsEditLink_Click(): void { 
        render(MAIN_CONTENT_SELECTOR, toDoListEditPage());
}

export async function listEdit(id:number): Promise<void> {
    listsEditLink_Click();
    const item = await ToDoService.getById(id);
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('title') as HTMLInputElement).value = item.title;
}

export async function listsNewForm_Submit(): Promise<void> {
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const item = new ToDoList(title);
    await ToDoService.addItem(item);

    await toDoLoad();
}

export async function listsEditForm_Submit(): Promise<void> {
    const id:number = Number((document.getElementById('id') as HTMLInputElement).value);
    const title:string = (document.getElementById('title') as HTMLInputElement).value;
    const shareWith:number = Number((document.getElementById('sharedWith') as HTMLInputElement).value);

    const item = new ToDoList(title);
  
    await ToDoService.editItem(id, item);
    
    if(shareWith != null ){
        await ToDoService.shareItem(id, shareWith);
    }

    await toDoLoad();
}

export async function listDelete(id:number): Promise<void> {
        let confirmation = confirm("Are you sure you want to delete this list? All of the tasks will be removed as well!"); 
    
        if (confirmation==true){
            await ToDoService.deleteItem(id); 
            toDoLoad();  
        } 
}

