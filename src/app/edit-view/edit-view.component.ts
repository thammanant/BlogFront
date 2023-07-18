import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Blog } from "../model/blog";

interface Month {
  name: string;
  code: string;
}

interface Status {
  status: string;
  code: string;
}

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {
  blog: any;
  title: string = '';
  id: string = '';
  sameId: string = '';
  // @ts-ignore
  months: Month[];
  // @ts-ignore
  selectedMonth: Month;
  // @ts-ignore
  status: Status[];

  selectedCategories: any[] = [];

  categories: any[] = [];

  isFormValid: boolean = false;

  constructor(private DataService: DataService) {}

  ngOnInit() {
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
    this.status = [
      { status: 'Published', code: 'Pub' },
      { status: 'Draft', code: 'Draft' },
    ];

    // this.blog = this.DataService.getBlogFromID(id);
    // This is hardcoded for testing
    this.blog = {
      id: 'Test-10/Jan/2023-12:30',
      title: 'Test',
      description: 'Test',
      selectedMonth: this.months[0],
      day: '10',
      year: '2023',
      hour: '12',
      minute: '30',
      selectedStatus: 'Published',
      categories: [{ title: 'Fantasy'}, { title: 'Sci-Fi'}, { title: 'Horror'}]
    };

    this.sameId = this.blog.id;

    this.blog.selectedCategories = [];
  }

  validateForm(): void {
    // Check if all required fields are filled
    this.isFormValid =
      this.blog.title.trim() !== '' &&
      this.blog.day.trim() !== '' &&
      this.blog.selectedMonth !== undefined &&
      this.blog.year.trim() !== '' &&
      this.blog.hour.trim() !== '' &&
      this.blog.minute.trim() !== '' &&
      this.blog.description.trim() !== '';

    this.isFormValid =
      this.isFormValid &&
      Number(this.blog.day) >= 1 && Number(this.blog.day) <= 31 && // Validate day (1-31)
      Number(this.blog.hour) >= 0 && Number(this.blog.hour) <= 23 && // Validate hour (0-23)
      Number(this.blog.minute) >= 0 && Number(this.blog.minute) <= 59 && // Validate minute (0-59)
      Number(this.blog.year) >= 1900 && Number(this.blog.year) <= 2100;
  }

  updatePublishBlog() {
    this.validateForm();

    if (this.isFormValid) {
      const id =
        this.blog.title.replace(/\s+/g, ' ').trim() +
        '-' +
        this.blog.day +
        '/' +
        this.blog.selectedMonth?.code +
        '/' +
        this.blog.year +
        '-' +
        this.blog.hour +
        ':' +
        this.blog.minute;
      const blog: Blog = {
        id: id,
        title: this.blog.title.replace(/\s+/g, ' ').trim(),
        date: this.blog.day + '-' + this.blog.selectedMonth?.code + '-' + this.blog.year,
        time: this.blog.hour + ':' + this.blog.minute,
        status: 'Publish',
        description: this.blog.description,
        categories:
          this.blog.categories.length === 0 ? ['Uncategorized'] : this.blog.categories
      };

      console.log('id: ' + id);
      console.log(blog);
      console.log('BLOG UPDATED');
    } else {
      console.log('PLEASE FILL ALL FIELDS OR CHECK IF DATE AND TIME ARE VALID');
    }
  }

  removeCategory(category: any) {
    // console.log('Categories:', this.blog.categories);
    // console.log('Selected Categories:', this.blog.selectedCategories);
    // console.log('Category to Remove:', category);

    const remove = this.blog.selectedCategories

    this.blog.categories = this.blog.categories.filter((item: any) => {
      return !remove.includes(item);
    });

    // console.log('Updated Categories:', this.blog.categories);
  }

  func3() {
    // TODO
  }

  func7() {
    // TODO
  }
}
