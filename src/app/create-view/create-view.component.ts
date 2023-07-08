import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { DataService } from '../services/data.service';
import {Blog} from "../model/blog";
import { Router } from '@angular/router';


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
  description: string = '';
  title: string = '';
  day: string = '';
  year: string = '';
  hour: string = '';
  minute: string = '';
  months: Month[] = [];
  selectedMonth: Month | undefined;
  selectedCategories: any[] = [];
  categories: any[] = [];
  isFormValid: boolean = false;


  constructor(private categoryService: CategoryService, private DataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.months = [
      {name: '01-Jan', code: 'Jan'},
      {name: '02-Feb', code: 'Feb'},
      {name: '03-Mar', code: 'Mar'},
      {name: '04-Apr', code: 'Apr'},
      {name: '05-May', code: 'May'},
      {name: '06-Jun', code: 'Jun'},
      {name: '07-Jul', code: 'Jul'},
      {name: '08-Aug', code: 'Aug'},
      {name: '09-Sep', code: 'Sep'},
      {name: '10-Oct', code: 'Oct'},
      {name: '11-Nov', code: 'Nov'},
      {name: '12-Dec', code: 'Dec'}
    ];

    this.categoryService.categories$.subscribe((categories: any[]) => {
      this.categories = categories;
    });

    this.categoryService.fetchCategoriesFromDatabase();
  }

  validateForm(): void {
    // Check if all required fields are filled
    this.isFormValid = this.title.trim() !== '' &&
      (this.day.trim() !== '') &&
      this.selectedMonth !== undefined &&
      this.year.trim() !== '' &&
      this.hour.trim() !== '' &&
      this.minute.trim() !== '' &&
      this.description.trim() !== ''

    this.isFormValid = this.isFormValid &&
      Number(this.day) >= 1 && Number(this.day) <= 31 &&   // Validate day (1-31)
      Number(this.hour) >= 0 && Number(this.hour) <= 23 && // Validate hour (0-23)
      Number(this.minute) >= 0 && Number(this.minute) <= 59 && // Validate minute (0-59)
      Number(this.year) >= 1900 && Number(this.year) <= 2100;
  }

  createDraftBlog() {
    this.validateForm();

    if (this.isFormValid) {
      const id = this.title.replace(/\s+/g, ' ').trim() + '-' + this.day + '/' + this.selectedMonth?.code + '/' + this.year + '-' + this.hour + ':' + this.minute;
      const blog: Blog = {
        id: id,
        title: this.title.replace(/\s+/g, ' ').trim(),
        date: this.day + '-' + this.selectedMonth?.code + '-' + this.year,
        time: this.hour + ':' + this.minute,
        status: "Draft",
        description: this.description,
        categories: this.selectedCategories.length === 0 ? ["Uncategorized"] : this.selectedCategories
      };
      this.DataService.createBlogDB(blog);
    } else {
      console.log("PLEASE FILL ALL FIELDS OR CHECK IF DATE AND TIME ARE VALID ");
    }
  }

  createPublishBlog() {
    this.validateForm();

    if (this.isFormValid) {
      const id = this.title.replace(/\s+/g, ' ').trim() + '-' + this.day + '/' + this.selectedMonth?.code + '/' + this.year + '-' + this.hour + ':' + this.minute;
      const blog: Blog = {
        id: id,
        title: this.title.replace(/\s+/g, ' ').trim(),
        date: this.day + '-' + this.selectedMonth?.code + '-' + this.year,
        time: this.hour + ':' + this.minute,
        status: "Publish",
        description: this.description,
        categories: this.selectedCategories.length === 0 ? ["Uncategorized"] : this.selectedCategories
      };
      this.DataService.createBlogDB(blog);
    } else {
      console.log("PLEASE FILL ALL FIELDS OR CHECK IF DATE AND TIME ARE VALID ");
    }
  }
}
