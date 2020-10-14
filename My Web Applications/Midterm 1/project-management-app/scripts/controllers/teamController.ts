
import { MAIN_CONTENT_SELECTOR } from '../utils/constants';
import { timeFilter, modal, render } from '../utils/helpers';
import teamPage from '../views/pages/teamPage';
import Team from '../entities/team';
import TeamService from '../services/teamService';
import teamEditPage from '../views/components/team/teamEditPage';
import assignUserPage from '../views/components/team/assignUserPage';
import deletePage from '../views/pages/deletePage';


export async function teamLoad(): Promise<void> {
    render(MAIN_CONTENT_SELECTOR, teamPage());
  
    const teamTable: HTMLElement = document.getElementById('teamTable') as HTMLElement;
    const items: Array<Team> = await TeamService.getAll();
  
    if (!items) {
      return;
    }
  
    for (const currentItem of items) {
      teamTable.appendChild(generateTeamRow(currentItem));
    }
}
  
  
function generateTeamRow(currentItem: Team): HTMLElement {
    const { id, title, createDate, updateDate } = currentItem;
    const row: HTMLElement = document.createElement('tr') as HTMLElement;
    row.setAttribute('title', `ID: ${id}`);
    row.className = "data-container hover";
    row.innerHTML = `
        <td class="data-field">${title}</td>
        <td class="data-field">${timeFilter(createDate)}</td>
        <td class="data-field">${timeFilter(updateDate)}</td>
        <td colspan="3" class="data-field button-list">
            <button class="assign-button" title="Assign to team"></button>
            <button class="edit-button" title="Edit team"></button>
            <button class="delete-button" title="Delete team"></button>
        </td>
    `;

    (row.querySelector('.assign-button') as HTMLButtonElement)
    .addEventListener('click', ()=> assignUser(id));

    (row.querySelector('.edit-button') as HTMLButtonElement)
    .addEventListener('click', () => editTeam(id));

    (row.querySelector('.delete-button') as HTMLButtonElement)
    .addEventListener('click', () => deleteTeam(id));
  
    return row;
}

// renders user assign form
export async function assignUser(id:string): Promise<void>{
    modal(assignUserPage());
    (document.getElementById('id') as HTMLInputElement).value = id;
}

//   handles user assigning to team
export async function assignUser_Submit(): Promise<void>{
    const userId:string = (document.getElementById('userId') as HTMLInputElement).value;
    const id:string = (document.getElementById('id') as HTMLInputElement).value;

    await TeamService.addMember(id, userId);
}

export function createNewTeam():void{
    modal(teamEditPage());
}

export async function editTeam(id: string): Promise<void> {
    modal(teamEditPage());
    const item = await TeamService.getById(id);
   
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('title') as HTMLInputElement).value = item.title;
}

export async function teamEdit_Submit(): Promise<void> {
    event.preventDefault();
    const id: string = (document.getElementById('id') as HTMLInputElement).value;
    const title: string = (document.getElementById('title') as HTMLInputElement).value;
    
    const item: Team = new Team(title);

    if (id == "") {
        await TeamService.addItem(item);
    } else {
        await TeamService.editItem(id, item);
    }

    await teamLoad();
}

export function deleteTeam(id:string): void{
    modal(deletePage());
    const message = "Are you sure you want to delete this team?";
    const deleteBtn: HTMLButtonElement = document.getElementById('deleteBtn') as HTMLButtonElement;
    deleteBtn.removeEventListener;
    
    (document.querySelector('.delete-message') as HTMLInputElement).innerHTML = message;
    deleteBtn.addEventListener('click', () => deleteConfirm(id));
  }
  
  export async function deleteConfirm(id:string): Promise<void>{
    await TeamService.deleteItem(id); 
    await teamLoad();  
  }
