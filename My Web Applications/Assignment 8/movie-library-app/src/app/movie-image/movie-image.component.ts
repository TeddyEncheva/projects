import { Component, Input } from '@angular/core'


@Component({
    selector: 'movie-image',
    templateUrl: './movie-image.component.html',
    styleUrls: ['./movie-image.component.css']
})

export class MovieImageComponent {
    @Input()  image:string;
    @Input() index:number;
    
     baseUrl:string = "https://image.tmdb.org/t/p/"
     defaultPosterSize:string = "w500";

     availablePosterSizes:Array<String> = [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
    ];
}