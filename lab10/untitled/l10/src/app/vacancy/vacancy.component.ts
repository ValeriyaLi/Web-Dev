import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit{
  vacancies!: Vacancy[]

  constructor(private companyService: CompanyService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    // @ts-ignore
    const companyIdFromRoute = BigInt(routeParams.get('companyId'));
    this.companyService.getVacancies(companyIdFromRoute).subscribe((vacancies: Vacancy[]) => this.vacancies = vacancies);
  }
}
