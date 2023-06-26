import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import {BlogDataService} from "../services/blog-data.service";

interface Month {
  name: string;
  code: string;
}

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class CreateViewComponent implements OnInit {
  text: string = '';
  title: string = '';
  day: string = '';
  year: string = '';
  hour: string = '';
  minute: string = '';
  isDraft: string = 'false';
  months: Month[] = [];
  selectedMonth: Month | undefined;

  selectedCategories: any[] = [];
  categoryCount: number = 0;
  categories: any[] = [];

  constructor(private categoryService: CategoryService, private blogService: BlogDataService) {}

  ngOnInit(): void {
    this.months = [
      { name: '01-Jan', code: 'Jan' },
      { name: '02-Feb', code: 'Feb' },
      { name: '03-Mar', code: 'Mar' },
      { name: '04-Apr', code: 'Apr' },
      { name: '05-May', code: 'May' },
      { name: '06-Jun', code: 'Jun' },
      { name: '07-Jul', code: 'Jul' },
      { name: '08-Aug', code: 'Aug' },
      { name: '09-Sep', code: 'Sep' },
      { name: '10-Oct', code: 'Oct' },
      { name: '11-Nov', code: 'Nov' },
      { name: '12-Dec', code: 'Dec' }
    ];
    this.categories = this.categoryService.getCategories();
    this.updateCategoryCount();

    // Retrieve the categories from the CategoryService
    this.categoryService.categories$.subscribe((categories: any[]) => {
      this.categories = categories;
    });
  }
  updateCategoryCount(): void {
    this.categoryCount = this.categoryService.getCategoryCount();
  }
  onCheckboxChange(event: any, category: any): void {       //no use still
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.findIndex((item) => item.name === category.name);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
  }



  removeSelectedCategories(): void {                        //no use still
    this.selectedCategories.forEach((category) => {
      const index = this.categoryService.getCategories().findIndex((item) => item.name === category.name);
      if (index !== -1) {
        this.categoryService.getCategories().splice(index, 1);
      }
    });
    this.selectedCategories = [];
    this.updateCategoryCount();
  }



}
