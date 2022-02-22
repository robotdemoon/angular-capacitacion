import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components';
import * as pipes from './pipes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ...components.components,
    ...pipes.pipes
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...components.components,
    ...pipes.pipes
  ]
})
export class SharedModule { }
