import { timeFilter, render } from '../utils/helpers';
import Task from '../entities/task';
import TaskService from '../services/taskService';
import  taskPage  from '../views/pages/taskPage';
import { tasksNewPage, tasksEditPage } from '../views/components/tasks';
import User from '../entities/user';
import { listDelete, listEdit } from './toDoController';
import { MAIN_CONTENT_SELECTOR, TASK_EDIT_SELECTOR } from '../utils/constants';
import ToDoList from '../entities/todo';
import listService from '../services/listService';


export async function tasksLoad(id: number):Promise<void> {
    render(MAIN_CONTENT_SELECTOR, taskPage());
    const newTaskLink = document.getElementById('newTaskLink') as HTMLElement;
    newTaskLink.addEventListener('click', () => tasksNewLink_Click(id));

    const tasksList = document.getElementById('tasksList');
    const list:ToDoList = await listService.getById(id);
    tasksList.appendChild(generateListInfo(list)); 

    const tasksTable = document.getElementById('tasksTable');

    TaskService.updateUrl(id)
    const items: Array<Task> = await TaskService.getAll();
    
    for (const currentItem of items) {
        tasksTable.appendChild(generateUsersRow(currentItem));
        }
    }
   
function generateListInfo(list:ToDoList): HTMLElement{
    const {id,title, createDate, updateDate} = list;
    const box: HTMLElement = document.createElement('div');
    box.className = "list-info";
    const filterCreateDate = timeFilter(createDate);
    const filterUpdateDate = timeFilter(updateDate);

    box.innerHTML = `
    <div>
        <h4>${title}</h4>
        <p>Date of creation:${filterCreateDate}</p>
        <p>Date of last edit:${filterUpdateDate}</p>
    </div>
    <div class="task-buttons">
        <a class="edit-button" title="Edit list"></a>
        <a class="delete-button" title="Delete list"></a>
    </div>`;

        box.querySelector('.edit-button')
        .addEventListener('click', () => listEdit(id));
        box.querySelector('.delete-button')
        .addEventListener('click', () => listDelete(id));

    return box;
}

function generateUsersRow(currentItem: Task): HTMLElement{
const {id, taskListId, title, description, isComplete} = currentItem;
        const row: HTMLElement = document.createElement('div');
        row.className = "task-details-container";

        row.innerHTML = `
        <div class='task-box data-field'>
            <label class="checkbox-label">
                <input type="checkbox" id="isComplete" class='task-checkbox'>
                <span class="checkbox-copy"></span>
            </label>
            <div class="task-data">
                <div class="task-title">${title}</div>
                <div class="task-description">${description}</div>
            </div>
            <div class="task-buttons">
                <a class="assign-button" title="Assign task"></a>
                <a class="delete-button" title="Delete task"></a>
            </div>
        </div>
    `;

    const checkbox = row.querySelector('.task-checkbox') as HTMLInputElement;
    checkbox.checked = isComplete;

    // Update The State of a Task When The Side Checkbox is Clicked 
   row.querySelector('.task-checkbox')
   .addEventListener('change', () => {
        if(checkbox.checked) {
            let check=true;
            completeState(id, currentItem, check);
        } else {
            let check = false;
            completeState(id, currentItem, check);
        }
    });

    row.querySelector('.task-data')
    .addEventListener('click', () => taskEdit(id));
    row.querySelector('.delete-button')
    .addEventListener('click', () => taskDelete(id, taskListId));

  return row;
    }
    
    // OLD FUNCTION FOR DISPLAYING ASSIGNEES FOR A TASK

// export function readThroughAssignees(assignees:Array<User>): string{
//     const assigneesList =[];
//     for (let i = 0; i < assignees.length; i++) {
//         const assignee = assignees[i];
//         assigneesList.push(
//             `ID: ${assignee.id} username:  ${assignee.username}
// `);  
//     }
//     return String(assigneesList);
// }

async function completeState(id:number, currentItem:Task, check:boolean): Promise<void>{
    const item = new Task(currentItem.title, currentItem.description, check);
    await TaskService.editItem(id, item);
    (document.getElementById('isCompleted') as HTMLInputElement).checked = item.isComplete;

}

export function tasksNewLink_Click(id:number): void{
    render(TASK_EDIT_SELECTOR, tasksNewPage());
    (document.getElementById('listId') as HTMLInputElement).value = String(id);
}

export function tasksEditLink_Click():void {
    render(TASK_EDIT_SELECTOR, tasksEditPage());
} 

export async function taskEdit(id:number):  Promise<void>  {
    tasksEditLink_Click();

    const item:Task = await TaskService.getById(id);

    (document.getElementById('id') as HTMLInputElement).value = String(item.id);
    (document.getElementById('listId') as HTMLInputElement).value = String(item.taskListId);
    (document.getElementById('task') as HTMLInputElement).value = item.title;
    (document.getElementById('details') as HTMLInputElement).value = item.description;
    (document.getElementById('isCompleted') as HTMLInputElement).checked = item.isComplete;
}

export async function tasksNewForm_Submit(): Promise<void> {
    const listId = Number((document.getElementById('listId') as HTMLInputElement).value);
    const title = (document.getElementById('task') as HTMLInputElement).value;
    const description = (document.getElementById('details') as HTMLInputElement).value;
    const isComplete = Boolean((document.getElementById('isCompleted') as HTMLInputElement).checked);
   
    const item = new Task(title, description, isComplete);
 
    await TaskService.addItem(item);
    
    tasksLoad(listId);
}

export async function tasksEditForm_Submit():Promise<void> {
    const id:number  = Number((document.getElementById('id') as HTMLInputElement).value);
    const listId:number = Number((document.getElementById('listId') as HTMLInputElement).value);
    const title:string = (document.getElementById('task') as HTMLInputElement).value;
    const description:string = (document.getElementById('details') as HTMLInputElement).value;
    const isComplete:boolean = Boolean((document.getElementById('isCompleted') as HTMLInputElement).checked);
    const assignUser:number = Number((document.getElementById('assignee') as HTMLInputElement).value);

    const item:Task = new Task(title, description, isComplete);

    await TaskService.editItem(id, item);
   

    if(assignUser != 0 ){
        await TaskService.assignUser(id, assignUser);
    }

    tasksLoad(listId);
}

export async function taskDelete(id: number, listId: number):Promise<void> {
    let confimation = confirm("Are you sure you want to delete this task?");
    if(confimation==true){
    await TaskService.deleteItem(id);
    tasksLoad(listId);
    }
}