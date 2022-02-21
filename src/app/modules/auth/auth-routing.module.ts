import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {INTERNAL_PATHS, INTERNAL_ROUTES} from "@data/constants/routes";
import {LoginComponent} from "@modules/auth/sections/login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES.AUTH_LOGIN,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.AUTH_LOGIN,
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
