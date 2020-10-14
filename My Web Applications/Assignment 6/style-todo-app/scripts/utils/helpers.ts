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

export function handleNavigation(): void {
    const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();
    if (loggedUser) {  
      render('.nav-container', navigation());
      const usersLink = (document.getElementById('usersLink') as HTMLElement);
      if(!loggedUser.isAdmin){
          usersLink.style.display = 'none';
      }else{
          usersLink.style.display = '';
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

  export function  timeFilter(date:string): string{
    const d:Date = new Date(date);
    let today = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth()+1)).slice(-2) + '/' + d.getFullYear();
    return today;
}