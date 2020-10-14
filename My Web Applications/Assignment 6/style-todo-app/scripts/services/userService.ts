 import {URL_USER} from '../utils/constants';
 import BaseService from './baseService';
 class UsersService extends BaseService {
   constructor(){
     super(URL_USER);
   }
}

export default new UsersService;
