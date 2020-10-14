import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from './constants/app.routes';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.search.path,
    loadChildren: () =>
      import('./search-page/search-page.module').then(
        (m) => m.SearchPageModule
      ),
  },
  {
    path: APP_ROUTES.volumes.path,
    loadChildren: () =>
      import('./result-page/result-page.module').then(
        (m) => m.ResultPageModule
      ),
  },
  {
    path: APP_ROUTES.authentication.path,
    loadChildren: () =>
      import('./core/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
