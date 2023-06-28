import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import {DataService} from "../services/data.service";


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
  months: Month[] = [];
  selectedMonth: Month | undefined;

  selectedCategories: any[] = [];

  categories: any[] = [];

  // @ts-ignore
  constructor(private categoryService: CategoryService, private blogService: DataService) {}

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

    // Retrieve the categories from the CategoryService
    this.categoryService.categories$.subscribe((categories: any[]) => {
      this.categories = categories;
    });

  }

  //create blog
  createBlog(): void {
      this.blogService.createBlogDB({
        id: 'Blog3',
        title:'Title1',
        content: 'Content1',
        date: 'Date1',
        year: 'Year1',
        status: 'Status1'
      }
      );

  }



}
