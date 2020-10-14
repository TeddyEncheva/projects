import { MAIN_CONTENT_SELECTOR } from '../utils/constants';
import { render, modal, loggedUserIDMatch } from '../utils/helpers';
import ProjectService from '../services/projectService';
import Project from '../entities/project';
import projectPage from '../views/pages/projectPage';
import projectEditPage from '../views/components/project/projectEditPage';
import { taskLoad } from './taskController';
import assignTeamPage from '../views/components/project/assignTeamPage';
import Task from '../entities/task';
import TaskService from '../services/taskService';
import { LoggedUser } from '../utils/models';
import AuthenticationService from '../services/authenticationService';
import WorklogService from '../services/worklogService';
import Worklog from '../entities/worklog';
import deletePage from '../views/pages/deletePage';

export async function projectLoad(): Promise<void> {
    render(MAIN_CONTENT_SELECTOR, projectPage());
   
    const projectList:HTMLElement = document.getElementById('projectList') as HTMLElement;
    const items: Array<Project> = await ProjectService.getAll();

    if(!items){
        return;
    }

    buildDashboard(items);

    for (const currentItem of items) {
        projectList.appendChild(generateProjectBox(currentItem));
    }

    // fills the gap for responsivene design
    for (let index = 0; index < 3; index++) {
        const element: HTMLElement = document.createElement('div') as HTMLDivElement;
        element.className = "project-container gap-filler";
        projectList.appendChild(element);
    }
}

function generateProjectBox(currentItem: Project): HTMLElement{
    const { id, title, description, creatorId } = currentItem;
    const element: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    element.setAttribute('title', `ID: ${id}`);
    element.className = "project-container hover shadow";
    element.innerHTML = `
        <div class="title">
            <h2>${title}</h2>
            <div class="button-container">
            </div>
        </div>
            <p>${description}</p>
    `;
     
    if(loggedUserIDMatch(creatorId)){
        (element.querySelector('.button-container') as HTMLElement).innerHTML= `
            <button class="assign-button" title="Assign a User"></button>
            <button class="edit-button" title="Edit Project"></button>
            <button class="delete-button" title="Delete Project"></button>
        `;

        (element.querySelector('.edit-button') as HTMLButtonElement)
        .addEventListener('click', (e) => {
            e.stopPropagation();
            projectEdit(id)
        });

        (element.querySelector('.delete-button') as HTMLButtonElement)
        .addEventListener('click', (e) => {
            e.stopPropagation();
            projectDelete(id)
        });

        (element.querySelector('.assign-button') as HTMLButtonElement)
        .addEventListener('click', (e) => {
            e.stopPropagation();
            assignProject(id)
        });  
    }

    element.addEventListener('click', ()=> taskLoad(id));

  return element;
}


//Pops the form for assignee
function assignProject(id:string): void{
    modal(assignTeamPage());
    (document.getElementById('id') as HTMLInputElement).value = id;
}

// Sends a request for Assignee
export async function assignTeam_Submit(): Promise<void>{
    event.preventDefault();
    
    const teamId:string = (document.getElementById('teamId') as HTMLInputElement).value;
    const id:string = (document.getElementById('id') as HTMLInputElement).value;

    ProjectService.assignTeam(id, teamId);
} 

export async function buildDashboard(projects: Array<Project>): Promise<void> {
    const loggedUser:LoggedUser = AuthenticationService.getLoggedUser();

    const projectCount: HTMLElement = document.getElementById('projectCount') as HTMLElement;
    projectCount.innerHTML = String(projects.length);

    let assignCount = 0;
    let pendingCount = 0;
    let timeWorked = 0;
    
    projects.forEach(async (project: Project): Promise<void>  =>  {
          
        TaskService.updateUrl(project.id);
        const tasks:Array<Task> = await TaskService.getAll();
        
        tasks.forEach(async (task:Task): Promise<void> => {
            //adding assigned tasks to the count
            if(loggedUserIDMatch(String(task.assigneeId))){
                assignCount ++;
                document.getElementById('assigned').innerHTML = String(assignCount);

                //adding pending tasks assigned to me
                if(task.status == 'Pending'){
                    pendingCount++;
                    document.getElementById('pendingCount').innerHTML = String(pendingCount);
                }
            }

            // Count ALL logs from OWNED and ASSIGNED Tasks
            if(loggedUserIDMatch(project.creatorId) || loggedUserIDMatch(String(task.assigneeId))){
                WorklogService.updateUrl(task.id);
                const worklogs: Array<Worklog> = await WorklogService.getAll();
                worklogs.forEach(worklog => {
                    if(worklog.userId == loggedUser.id){
                        timeWorked+=worklog.time;
                        document.getElementById('timeWorked').innerHTML = `${String(timeWorked)}h`;
                    }
                });
            }
        });
    }); 
}

export function createNewProject(): void{
    modal(projectEditPage());
}

export async function projectEdit(id:string): Promise<void> {
    modal(projectEditPage());
    const item:Project = await ProjectService.getById(id);
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('title') as HTMLInputElement).value = item.title;
    (document.getElementById('description') as HTMLInputElement).value = item.description;
}

export async function projectEdit_Submit():Promise<void> {
    event.preventDefault();

    const id:string  = (document.getElementById('id') as HTMLInputElement).value;
    const title:string = (document.getElementById('title') as HTMLInputElement).value;
    const description:string = (document.getElementById('description') as HTMLInputElement).value;
    
    const item:Project = new Project(title, description);
  
    if (id == "") {
        await ProjectService.addItem(item);
    } else {
        await ProjectService.editItem(id, item);
    }
    await projectLoad();
}


export function projectDelete(id:string): void{
    modal(deletePage());
    const message = "Are you sure you want to delete this project?";
    const deleteBtn: HTMLButtonElement = document.getElementById('deleteBtn')as HTMLButtonElement;
    deleteBtn.removeEventListener;
   
    (document.querySelector('.delete-message') as HTMLInputElement).innerHTML = message;
    deleteBtn.addEventListener('click', () => deleteConfirm(id));
}

export async function deleteConfirm(id:string): Promise<void>{
    await ProjectService.deleteItem(id); 
    await projectLoad();  
}