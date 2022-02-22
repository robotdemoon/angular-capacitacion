import {Component, OnInit, ViewChild} from '@angular/core';
import {MainButtonComponent} from "@components/buttons";
import {HomeService} from "@data/services/page/home.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HomeService]
})
export class LoginComponent implements OnInit{
  public isFirstStep = true;
  public contador = 1;
  @ViewChild(MainButtonComponent) button!: MainButtonComponent;

  constructor(
    public homeService: HomeService
  ) {
  }

  ngOnInit() {

  }
}
