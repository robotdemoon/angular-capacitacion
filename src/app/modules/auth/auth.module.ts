import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './sections/login/login.component';
import {SharedModule} from "@shared/shared.module";
import { LoginHeaderComponent } from './sections/login/components/login-header/login-header.component';
import { LoginBodyComponent } from './sections/login/components/login-body/login-body.component';
import { LoginFooterComponent } from './sections/login/components/login-footer/login-footer.component';
import { LoginCongratsComponent } from './sections/login/components/login-congrats/login-congrats.component';
import { RegisterComponent } from './sections/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginHeaderComponent,
    LoginBodyComponent,
    LoginFooterComponent,
    LoginCongratsComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
