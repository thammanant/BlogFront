import { Component, OnInit } from '@angular/core';

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
  // title = 'edit-view';
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

  categories: any[] = [
    { name: ' Uncategorized', key: 'Un' },
  ];

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
  }
  //Dropdown functions
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

