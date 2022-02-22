import { Component } from '@angular/core';
import {INTERNAL_ROUTES} from "@data/constants/routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cap-angular';
  public $internal__routes = INTERNAL_ROUTES;
}
