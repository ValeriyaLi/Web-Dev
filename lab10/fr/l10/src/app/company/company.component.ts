import { Component } from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  companies!: Company[]

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies: Company[]) => this.companies = companies);
  }
}
