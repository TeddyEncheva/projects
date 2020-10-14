 import {URL_USER} from '../constants';
 import BaseRepository from './baseRepo';
 class UsersRepository extends BaseRepository {
   constructor(){
     super(URL_USER);
   }
}

export default new UsersRepository;
