import { MAIN_CONTENT_SELECTOR } from '../utils/constants';
import { modal, render, loggedUserIDMatch, statusColor } from '../utils/helpers';
import Task from '../entities/task';
import TaskService from '../services/taskService';
import WorklogService from '../services/worklogService';
import Worklog from '../entities/worklog';
import { timeFilter } from '../utils/helpers';
import workLogPage from '../views/pages/workLogPage';
import { LoggedUser } from '../utils/models';
import AuthenticationService from '../services/authenticationService';
import logEditPage from '../views/components/task/logEditPage';
import deletePage from '../views/pages/deletePage';


export async function workLogLoad(taskId: string):Promise<void> {
    render(MAIN_CONTENT_SELECTOR, workLogPage());

    const newTask = document.getElementById('newLog') as HTMLElement;
    newTask.addEventListener('click', () => createNewLog(taskId));

    const taskInfo: HTMLElement = document.getElementById('taskInfo') as HTMLElement;
    const task:Task = await TaskService.getById(taskId);
    taskInfo.appendChild(generateTaskInfo(task)); 
    
    const logList = document.getElementById('logList');
    WorklogService.updateUrl(taskId)
    const items: Array<Worklog> = await WorklogService.getAll();

    if(!items){
        return;
    }

    for (const currentItem of items) {
        logList.appendChild(generateLogRow(currentItem));
    }
}

function generateTaskInfo(task:Task): HTMLElement{
    const { title, description, status } = task;
    const taskBlock: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    
    taskBlock.innerHTML = `
        <div class="task-data">
            <h3>${title}</h3>
            <div class="state-holder">
                <div class="state border-rounding">
                        <p>${status}</p>
                </div>
            </div>
        </div>
        <p>${description}</p>
        `;

    const statusDiv: HTMLDivElement = taskBlock.querySelector('.state') as HTMLDivElement;
    statusColor(statusDiv, status);

    return taskBlock;
}

function generateLogRow(currentItem:Worklog): HTMLDivElement{
    const {id, time, date, userId, taskId } = currentItem;
    const log: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    log.className = ('task-container shadow hover');
    
    log.innerHTML = `
        <div class ="title">
            <div class="log-data">
                <h3>${time}h - ${timeFilter(date)}</h3>
            </div>
            <div class="button-container">
            </div>
        </div>
    `;

    if(loggedUserIDMatch(userId)){

        log.querySelector('.button-container').innerHTML= `
            <button class="edit-button" title="Edit Task"></button>
            <button class="delete-button" title="Delete Task"></button>
        `;

        (log.querySelector('.edit-button') as HTMLButtonElement)
        .addEventListener('click', () => editLog(id));

        (log.querySelector('.delete-button') as HTMLButtonElement)
        .addEventListener('click', () => deleteLog(id, taskId ));
    }

    return log;
}


export function createNewLog(taskId:string): void{
    modal(logEditPage());
    const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();
    (document.getElementById('taskId') as HTMLInputElement).value = taskId;
    (document.getElementById('userId') as HTMLInputElement).value = loggedUser.id;
}


export async function editLog(id:string): Promise<void>{
    modal(logEditPage());
    
    const item:Worklog = await WorklogService.getById(id);
    
    (document.getElementById('userId') as HTMLInputElement).value = item.userId;
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('taskId') as HTMLInputElement).value = item.taskId;
    (document.getElementById('time') as HTMLInputElement).value = String(item.time);
    (document.getElementById('date') as HTMLInputElement).value = item.date.substring(0, 10).split('/').reverse().join('/');
}


export async function logEdit_Submit(): Promise<void> {
    event.preventDefault();
    const id:string  = (document.getElementById('id') as HTMLInputElement).value;
    const userId: string = (document.getElementById('userId') as HTMLInputElement).value;
    const taskId:string = (document.getElementById('taskId') as HTMLInputElement).value;
    const time:number = Number((document.getElementById('time')as HTMLInputElement).value);
    const date:string = (document.getElementById('date') as HTMLInputElement).value;
    
    const item:Worklog = new Worklog(time, userId, date);
    
    if (id == "") {
        await WorklogService.addItem(item);
    } else {
        await WorklogService.editItem(id, item);
    }
    await workLogLoad(taskId);
}

export function deleteLog(id:string, taskId:string): void{
    modal(deletePage());
    const message = "Are you sure you want to delete this log?";
    const deleteBtn: HTMLButtonElement = document.getElementById('deleteBtn')as HTMLButtonElement;
    deleteBtn.removeEventListener;
    
    (document.querySelector('.delete-message') as HTMLInputElement).innerHTML = message;
    deleteBtn.addEventListener('click', () => deleteConfirm(id, taskId));
}

export async function deleteConfirm(id:string, taskId:string): Promise<void>{
    await WorklogService.deleteItem(id); 
    await workLogLoad(taskId);  
}