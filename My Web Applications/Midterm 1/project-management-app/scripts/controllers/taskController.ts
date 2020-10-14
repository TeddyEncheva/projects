import { MAIN_CONTENT_SELECTOR } from '../utils/constants';
import { modal, render, loggedUserIDMatch, statusColor } from '../utils/helpers';
import taskPage from '../views/pages/taskPage';
import ProjectService from '../services/projectService';
import Project from '../entities/project';
import Task from '../entities/task';
import TaskService from '../services/taskService';
import taskEditPage from '../views/components/task/taskEditPage';
import { workLogLoad } from './workLogController';
import deletePage from '../views/pages/deletePage';



export async function taskLoad(projectId: string): Promise<void> {
    render(MAIN_CONTENT_SELECTOR, taskPage());

    const newTask: HTMLDivElement = document.getElementById('newTask') as HTMLDivElement;
    newTask.addEventListener('click', () => createNewTask(projectId));

    const projectParent: HTMLElement = document.getElementById('projectParent') as HTMLElement;
    const parent: Project = await ProjectService.getById(projectId);
    projectParent.appendChild(generateProjectInfo(parent)); 
    
    const taskList: HTMLElement = document.getElementById('taskList') as HTMLElement;
    TaskService.updateUrl(projectId)
    const items: Array<Task> = await TaskService.getAll();

    if(!items){
        return;
    }

    for (const currentItem of items) {
        taskList.appendChild(generateTaskRow(currentItem));
    }
}

function generateProjectInfo(parent:Project): HTMLElement{
    const { title, description } = parent;
    const project: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    project.classList.add("project-parent-data")

    project.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;

    return project;
}

function generateTaskRow(currentItem:Task): HTMLDivElement{
    const {id, title, assigneeId, status, description, projectId, creatorId } = currentItem;
    const task: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    task.className = ('task-container shadow hover');
    
    task.innerHTML = `
        <div class ="title">
            <div class="task-data">
                <h3>${title} - ${assigneeId}</h3>
                <div class="state-holder">
                    <div class="state border-rounding">
                        <p>${status}</p>
                    </div>
                </div>
            </div>
            <div class="button-container">
            </div>
        </div>
        <div class="task-description">
            <p>${description}</p>
        </div>
    `;

    //Managing color for the status    
    const statusDiv = task.querySelector('.state') as HTMLDivElement;
    statusColor(statusDiv, status);

    if(loggedUserIDMatch(creatorId)){
        
        task.querySelector('.button-container').innerHTML= `
        <button class="edit-button" title="Edit Task"></button>
        <button class="delete-button" title="Delete Task"></button>
        `;

        (task.querySelector('.edit-button') as HTMLButtonElement)
        .addEventListener('click', (e) => {
            e.stopPropagation();
            editTask(id)
        });

        (task.querySelector('.delete-button') as HTMLButtonElement)
        .addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTask(id,projectId)
        });
    }

    task.addEventListener('click', () => workLogLoad(id));

    return task;
}


export function createNewTask(projectId:string): void{
    modal(taskEditPage());
    (document.getElementById('projectId') as HTMLInputElement).value = projectId;
}

export async function editTask(id:string): Promise<void>{
    modal(taskEditPage());
    
    const item:Task = await TaskService.getById(id);

    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('projectId') as HTMLInputElement).value = item.projectId;
    (document.getElementById('title') as HTMLInputElement).value = item.title;
    (document.getElementById('description') as HTMLInputElement).value = item.description;
    (document.getElementById('status') as HTMLInputElement).value = item.status;
    (document.getElementById('assignee') as HTMLInputElement).value = String(item.assigneeId);
}


export async function taskEdit_Submit(): Promise<void> {
    event.preventDefault();
    const id:string  = (document.getElementById('id') as HTMLInputElement).value;
    const projectId:string = (document.getElementById('projectId') as HTMLInputElement).value;
    const title:string = (document.getElementById('title') as HTMLInputElement).value;
    const description:string = (document.getElementById('description') as HTMLInputElement).value;
    const status:string = (document.getElementById('status') as HTMLInputElement).value;
    const assigneeId:number = Number((document.getElementById('assignee')as HTMLInputElement).value);

    const item:Task = new Task(title, description, status, assigneeId);
    
    if (id == "") {
        await TaskService.addItem(item);
    } else {
        await TaskService.editItem(id, item);
    }
    await taskLoad(projectId);
}

export function deleteTask(id:string, projectId:string): void{
    modal(deletePage());
    const message = "Are you sure you want to delete this task?";
    const deleteBtn: HTMLButtonElement = document.getElementById('deleteBtn')as HTMLButtonElement;
    deleteBtn.removeEventListener;
    
    (document.querySelector('.delete-message') as HTMLInputElement).innerHTML = message;
    deleteBtn.addEventListener('click', () => deleteConfirm(id, projectId));
}

export async function deleteConfirm(id:string, projectId:string): Promise<void>{
    await TaskService.deleteItem(id); 
    await taskLoad(projectId);  
}