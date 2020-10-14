import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VolumeList } from 'src/app/result-page/models/searchResult.model';
import { APP_ROUTES } from 'src/app/constants/app.routes';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  volumesSearch: FormControl;
  resultPage: VolumeList;
  param: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.volumesSearch = new FormControl('', Validators.required);
    this.searchForm = new FormGroup({
      volumesSearch: this.volumesSearch,
    });
  }

  onSubmit(): void {
    event.preventDefault();

    if (this.searchForm.valid) {
      this.param = this.volumesSearch.value;
      this.router.navigate([APP_ROUTES.volumes.path], {
        queryParams: { q: this.param },
      });
    }
  }
}
