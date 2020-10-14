import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../shared/models/cast';
import { CastService } from 'src/app/shared/cast.service';
import { Credit } from 'src/app/shared/models/creadit';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-top-cast',
  templateUrl: './top-cast.component.html',
  styleUrls: ['./top-cast.component.css']
})

export class TopCastComponent implements OnInit {
  credits: Credit;
  casts:Array<Cast>;
 

  constructor(private castService: CastService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.castService.getCredits(Number(this.route.snapshot.params['id']))
    .subscribe(data => this.credits = data);
  }

}
