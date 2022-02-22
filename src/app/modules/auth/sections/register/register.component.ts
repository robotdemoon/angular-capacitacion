import { Component, OnInit } from '@angular/core';
import {HomeService} from "@data/services/page/home.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

}
