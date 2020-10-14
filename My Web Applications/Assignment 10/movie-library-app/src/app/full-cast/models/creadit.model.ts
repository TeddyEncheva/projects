import { Cast } from './cast.model';
import { Crew } from './crew.model';

export interface Credit{
    id?: number;
    cast?: Cast[];
    crew?: Crew[];
}