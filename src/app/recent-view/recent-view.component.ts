import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recent-view',
  templateUrl: './recent-view.component.html',
  styleUrls: ['./recent-view.component.scss']
})
export class RecentViewComponent implements OnInit{
  bulkAction: any[] = [
    { name: 'Edit', key: 'edit' },
    { name: 'Move to Trash', key: 'trash' },
  ];
  selectedAction: any[] = [];

  allDates: any[] = [
    { name: 'All Date', key: 'AllD' },
  ];
  selectedDate: any[] = [];

  allCategories: any[] = [
    { name: 'All Categories', key: 'AllC' },
    { name: 'Uncategorized', key: 'Un' },
  ];
  selectedCat: any[] = [];

  selectedBlog: any[] = [];
  blogs: any[] = [
    { title: ' Title1', author:' Author1', categories:' cat1',date:' date1', key: 't1' },
    { title: ' Title2', author:' Author2', categories:' cat2',date:' date2', key: 't2' },
    { title: ' Title2', author:' Author2', categories:' cat2',date:' date2', key: 't2' },
    { title: ' Title2', author:' Author2', categories:' cat2',date:' date2', key: 't2' },
  ];
  bulkAction2: any[] = [
    { name: 'Edit', key: 'edit' },
    { name: 'Move to Trash', key: 'trash' },
  ];
  selectedAction2: any[] = [];

  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = new FormGroup({
      checkbox1: new FormControl<string | null>(null)
    });
  }
  //Button function
  func1() {
    //TODO
  }
  func2() {
    //TODO
  }
  func3() {
    //TODO
  }
  func4() {
    //TODO
  }
  func6() {
    //TODO
  }
  func13() {
    //TODO
  }
  func14() {
    //TODO
  }
  //Dropdown function
  func5() {
    //TODO
  }
  func7() {
    //TODO
  }
  func8() {
    //TODO
  }
  func12() {
    //TODO
  }
  //Checkbox function
  func9() {
    //TODO
  }
  func10() {
    //TODO
  }
  func11() {
    //TODO
  }

}



