import { Component, OnInit } from '@angular/core';
import { AstraService } from 'src/app/shared/astra.service';


@Component({
  selector: 'movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit {
  astra: any;

  getGenres(genres: Array<any>): string{
    let names: string ="";
    if(genres.length>1){
      genres.forEach(genre => {
        names+=(`${genre.name}, `);
      });
      names = names.replace(/,\s*$/, "");
      return names;
    }
   return genres[0].name;
  }
  
  constructor(private astraService: AstraService){
  }

 ngOnInit():void{
     this.astra = this.astraService.getAstra()
 }
}
