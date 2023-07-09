import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

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
export class EditViewComponent implements OnInit{
  blog : any;
  text: string = '';
  title: string = '';
  day: string = '';
  year: string = '';
  hour: string = '';
  minute: string = '';
  // @ts-ignore
  months: Month[];
  // @ts-ignore
  selectedMonth:Month;
  // @ts-ignore
  status: Status[];
  // @ts-ignore
  selectedStatus:Status

  selectedCategories: any[] = [];

  categories: any[] = [];

  constructor(private DataService: DataService) {
  }
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
        {status: 'Published', code: 'Pub'},
        {status: 'Draft', code: 'Draft'},
      ]

    //left delete and remove for now



    // const blogId = 'your-blog-id';
    // this.blog = this.DataService.getBlogDB(blogId);


    //this is hard ceded for testing
    this.blog = {
      id: 'Test-10/Jan/2023-12:30',
      title: 'Test',
      selectedMonth: this.months[0],
      day: '10',
      year: '2023',
      hour: '12',
      minute: '30',
      selectedStatus: "Published",
      selectedCategories: [{title:"fantasy",key:"Fantasy"}]
    };

    this.title = this.blog.title;
    this.selectedMonth = this.blog.selectedMonth;
    this.day = this.blog.day;
    this.year = this.blog.year;
    this.hour = this.blog.hour;
    this.minute = this.blog.minute;
    this.selectedStatus = this.blog.selectedStatus;
    this.categories = this.blog.selectedCategories;
  }


  // Dropdown functions
  func1() {
    //TODO
  }
  func2() {
    //TODO
  }
  //Editor functions
  func3() {
    //TODO
  }
  //Checkbox functions
  func4() {
    //TODO
  }
  //Button functions
  func5() {
    //TODO
  }
  func6() {
    //TODO
  }
  func7() {
    //TODO
  }

}

