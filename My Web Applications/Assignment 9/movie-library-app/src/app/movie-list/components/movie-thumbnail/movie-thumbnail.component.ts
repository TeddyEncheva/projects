import { Component, Input, Output } from '@angular/core'
import { Movie } from '../../../shared/models/movie';



@Component({
    selector: 'app-movie-thumbnail',
    templateUrl: './movie-thumbnail.component.html',
    styleUrls: ['./movie-thumbnail.component.css']
})

export class MovieThumbnailComponent{
    @Input()  movie:Movie;

}