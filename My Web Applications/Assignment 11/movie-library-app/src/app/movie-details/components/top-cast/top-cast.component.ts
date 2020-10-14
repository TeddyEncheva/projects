import { Component, OnInit } from '@angular/core';
import { Cast } from '../../../full-cast/models/cast.model';
import { CastService } from 'src/app/full-cast/services/cast.service';
import { Credit } from 'src/app/full-cast/models/creadit.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-cast',
  templateUrl: './top-cast.component.html',
  styleUrls: ['./top-cast.component.css'],
})
export class TopCastComponent implements OnInit {
  credits: Credit;
  casts: Array<Cast>;

  constructor(
    private castService: CastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.castService
      .getCredits(Number(this.route.snapshot.params['id']))
      .subscribe((data) => (this.credits = data));
  }
}
