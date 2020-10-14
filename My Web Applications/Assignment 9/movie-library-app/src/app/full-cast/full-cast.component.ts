import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../shared/models/cast';
import { CastService } from '../shared/cast.service';
import { ActivatedRoute } from '@angular/router';
import { Credit } from '../shared/models/creadit';


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
