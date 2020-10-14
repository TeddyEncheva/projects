import { Component, Input, Output } from '@angular/core'
import { Movie } from '../../models/movie';



@Component({
    selector: 'movie-thumbnail',
    templateUrl: './movie-thumbnail.component.html',
    styleUrls: ['./movie-thumbnail.component.css']
})

export class MovieThumbnailComponent{
    @Input()  movie:Movie;

}