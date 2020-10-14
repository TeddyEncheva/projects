import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SearchFormComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchFormComponent
  ]
})
export class SearchPageModule { }
