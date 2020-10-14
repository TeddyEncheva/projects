import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { FullCastComponent } from '../full-cast/full-cast.component';
import { FullReviewsComponent } from '../full-reviews/full-reviews.component';

const routes: Routes = [
    { path:'', component: MovieDetailsComponent},
    { path: 'cast', component: FullCastComponent},
    { path: 'reviews', component: FullReviewsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieDetailsRoutingModule {
}