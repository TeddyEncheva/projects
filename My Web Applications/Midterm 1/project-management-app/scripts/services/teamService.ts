import { URL_BASE, URL_TEAM, URL_MEMBERS } from '../utils/constants';
import BaserService from './baseService';
import { handleResponse } from '../utils/helpers';
import AuthenticationService from './authenticationService';

class TeamService extends BaserService{
    constructor(){
        super(URL_TEAM);
    }

    public url = URL_TEAM;
    public membersUrl = URL_MEMBERS;

    public async getMembers(id:string){
       const response = await fetch(`${URL_BASE}${this.url}/${id}${this.membersUrl}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': AuthenticationService.getAuthorizationHeader()
            },
        }); 
        return await handleResponse(response);
    } 

    public async addMember(id:string, userId:string){
        await fetch(`${URL_BASE}${this.url}/${id}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': AuthenticationService.getAuthorizationHeader()
            },
            body: JSON.stringify({'userId': userId})
        });
    }
    
}
export default new TeamService;