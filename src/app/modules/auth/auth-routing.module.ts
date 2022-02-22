import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {INTERNAL_PATHS, INTERNAL_ROUTES} from "@data/constants/routes";
import {LoginComponent} from "@modules/auth/sections/login/login.component";
import {RegisterComponent} from "@modules/auth/sections/register/register.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_ROUTES.AUTH_LOGIN,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.AUTH_LOGIN,
    component: LoginComponent
  },
  {
    path: INTERNAL_PATHS.AUTH_REGISTER,
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
