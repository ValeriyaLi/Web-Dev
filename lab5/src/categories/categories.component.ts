import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {categories, Category} from "../categories";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = categories;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
