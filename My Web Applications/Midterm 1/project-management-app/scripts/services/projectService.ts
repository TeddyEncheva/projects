import { URL_BASE, URL_PROJECT} from '../utils/constants';
import BaseService from './baseService';
import AuthenticationService from './authenticationService';

 class ProjectService extends BaseService {
   constructor(){
     super(URL_PROJECT);
   }


    public url = URL_PROJECT;

    public async assignTeam(id:string, teamId:string){
      await fetch(`${URL_BASE}${this.url}/${id}`, {
          method: 'POST',
          headers:{
              'Content-Type': 'application/json',
              'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify({'teamId': teamId})
      });
    }
}
export default new ProjectService;