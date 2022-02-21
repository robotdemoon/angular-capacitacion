import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {INTERNAL_PATHS, INTERNAL_ROUTES} from "@data/constants/routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES.AUTH_LOGIN,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.AUTH_DEFAULT,
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: INTERNAL_ROUTES.AUTH_LOGIN,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
