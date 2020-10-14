import AuthenticationService from '../services/authenticationService';
import { Listener, LoggedUser } from './models';
import { navigation } from '../views/components/navigation/index';


export function render(selector:string, renderData: { template: string, listeners: Listener[] }): void {
    const container: HTMLElement = (document.querySelector(selector) as HTMLElement);
    container.innerHTML = renderData.template;
    
if (renderData && renderData.listeners && renderData.listeners.length) {
    for (const listener of renderData.listeners) {
      const target: HTMLElement = (document.getElementById(listener.targetId) as HTMLElement);
      target.addEventListener(listener.eventType, listener.callback);
    }
  }
}

export function modal( renderData: { template: string, listeners: Listener[] }): void {
  const modal: HTMLDivElement = document.createElement("div");
  modal.classList.add("modal");

  
  const modalContent: HTMLDivElement = document.createElement("div");
  modalContent.classList.add("modal-content");
  
  modalContent.innerHTML = `
  <button type="button" class="close close-icon" name="close" value="close"></button>
   ${renderData.template}`;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);


  if (renderData && renderData.listeners && renderData.listeners.length) {
    for (const listener of renderData.listeners) {
      const target: HTMLElement = (document.getElementById(listener.targetId) as HTMLElement);
      target.addEventListener(listener.eventType, listener.callback);
    }
  }

  // Handling the close method of modal
  const closeElements:NodeListOf<Element> = modal.querySelectorAll('.close');
  closeElements.forEach(element => {
      element.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
  })
}

export function handleNavigation(): void {
    const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();
   
    if (loggedUser) {  
      render('.nav-container', navigation());
      const usersLink:HTMLElement = document.getElementById('usersLink') as HTMLElement;
      const teamsLink:HTMLElement = document.getElementById('teamsLink') as HTMLElement;

      burger();
      
      if(!loggedUser.isAdmin){
          usersLink.style.display = 'none';
          teamsLink.style.display = 'none';
      }else{
          usersLink.style.display = '';
          teamsLink.style.display = '';
      }
    } else {
      render('.nav-container', { template: '', listeners: [] });
    }
}

export async function handleResponse(response: Response) {
  if (response && response.ok) {
      return await response.json();
  } else {
      return new Error(`Failed with status code ${response.status}`);
  }
}

export function loggedUserIDMatch(id:string): boolean{
  const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();

  if(loggedUser.id == id){
    return true
  }
  return false;
}

// process status 
export function statusColor(statusDiv: HTMLDivElement, status: string): void{
  if(status == "In progress"){
    statusDiv.classList.add('yellow');
  } else if (status == "Completed"){
    statusDiv.classList.add('green');
  } else {
    statusDiv.classList.add('red');
  }
}

export function  timeFilter(date:string): string{
  const d:Date = new Date(date);
  let today = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth()+1)).slice(-2) + '/' + d.getFullYear();
  return today;
}


export function closeNav(): void{
  const navigation: HTMLElement =document.querySelector('.header-menu') as HTMLElement;
  const background: HTMLElement = document.body.querySelector(".dark-background") as HTMLDivElement;

  background.style.width = "0%";
  navigation.style.width = "0px";
  navigation.style.transition = "acubic-bezier(0.54, -0.29, 0.51, 1.05) 1.2s";
}

export function openNav():void{
  const navigation: HTMLDivElement =document.querySelector('.header-menu') as HTMLDivElement;
  const background: HTMLElement = document.body.querySelector(".dark-background") as HTMLDivElement;

  background.style.width = "100%";
  navigation.style.width = "260px";
  navigation.style.transition = "acubic-bezier(0.54, -0.29, 0.51, 1.05) 1.2s";
}

export function burger(): void{
  const burger: HTMLInputElement = document.getElementById('menu-btn') as HTMLInputElement;
  burger.addEventListener('click', () => {
      if(burger.checked){
        openNav();
      }
      burger.checked = false;
  });
}