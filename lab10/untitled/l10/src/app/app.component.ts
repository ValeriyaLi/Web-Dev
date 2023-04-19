import { Component } from '@angular/core';
import {CompanyService} from "./company.service";
import {Company} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'l10';
}
