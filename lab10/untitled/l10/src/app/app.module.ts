import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { VacancyComponent } from './vacancy/vacancy.component';
import {RouterModule} from "@angular/router";
import {CompanyComponent} from "./company/company.component";

@NgModule({
  declarations: [
    AppComponent,
    VacancyComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'companies', component: CompanyComponent },
      { path: 'companies/:companyId', component: VacancyComponent },
      { path: '', redirectTo: 'companies', pathMatch: "full" },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
