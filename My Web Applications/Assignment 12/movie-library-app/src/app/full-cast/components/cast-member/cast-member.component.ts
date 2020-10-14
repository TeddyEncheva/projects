import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../models/cast.model';

@Component({
  selector: 'app-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.css'],
})
export class CastMemberComponent implements OnInit {
  @Input() cast: Cast;

  constructor() {}

  ngOnInit(): void {}
}
