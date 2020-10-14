import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolumeList } from './models/searchResult.model';
import { VolumeService } from './services/volume.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit, OnChanges {
  param: string;
  resultPage: VolumeList;

  constructor(
    private route: ActivatedRoute,
    private volumeService: VolumeService
  ) {}

  ngOnInit(): void {
    this.setResults();
  }

  ngOnChanges(): void {
    this.setResults();
  }

  setResults(): void {
    this.route.queryParamMap.subscribe((param) => {
      this.param = param.get('q');
      this.loadPage(this.param);
    });
  }

  loadPage(param: string): void {
    this.volumeService.getAll(param).subscribe((result) => {
      this.resultPage = result;
    });
  }
}
