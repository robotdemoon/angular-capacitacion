import {Component, OnInit, ViewChild} from '@angular/core';
import {MainButtonComponent} from "@components/buttons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public isFirstStep = true;
  @ViewChild(MainButtonComponent) button!: MainButtonComponent;

  ngOnInit() {

  }
}
