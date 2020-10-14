import { Component, OnInit, Input } from '@angular/core';
import { Cast } from 'src/app/models/cast';
import { CastService } from 'src/app/shared/cast.service';


@Component({
  selector: 'top-cast',
  templateUrl: './top-cast.component.html',
  styleUrls: ['./top-cast.component.css']
})

export class TopCastComponent implements OnInit {
  casts:Array<Cast>;
  // @Input() id:number;
  

  constructor(private castService: CastService) { }

  ngOnInit(): void {
    this.casts = this.castService.getAll();
  }

}
