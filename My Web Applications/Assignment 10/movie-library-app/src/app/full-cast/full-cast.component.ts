import { Component, OnInit, Input } from '@angular/core';
import { Cast } from './models/cast.model';
import { CastService } from './services/cast.service';
import { ActivatedRoute } from '@angular/router';
import { Credit } from './models/creadit.model';


@Component({
  templateUrl: './full-cast.component.html',
  styleUrls: ['./full-cast.component.css']
})
export class FullCastComponent implements OnInit {
  casts:Array<Cast>;
  credits: Credit;
  
  constructor(private castService: CastService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.castService.getCredits(Number(this.route.snapshot.params['id']))
    .subscribe(data=> this.casts = data.cast);
  }
}
