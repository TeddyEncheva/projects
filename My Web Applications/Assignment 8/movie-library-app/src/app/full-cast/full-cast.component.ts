import { Component, OnInit } from '@angular/core';
import { Cast } from '../models/cast';
import { CastService } from '../shared/cast.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'full-cast',
  templateUrl: './full-cast.component.html',
  styleUrls: ['./full-cast.component.css']
})
export class FullCastComponent implements OnInit {
  casts:Array<Cast>;

  
  constructor(private castService: CastService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.casts = this.castService.getAll();
  }
}
