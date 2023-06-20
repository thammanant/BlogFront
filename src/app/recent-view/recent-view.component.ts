// @ts-ignore
// @ts-ignore

import { Component, OnInit } from '@angular/core';


interface Action {
  name: string;
  code: string;
}
interface Date {
  name: string;
  code: string;
}
interface Category {
  name: string;
  key: string;
}
@Component({
  selector: 'app-recent-view',
  templateUrl: './recent-view.component.html',
  styleUrls: ['./recent-view.component.scss']
})
export class RecentViewComponent {
  search: string = '';
  // @ts-ignore
  actions: Action[]
  // @ts-ignore
  dates: Date[]
  // @ts-ignore
  categories: Category[]
  // @ts-ignore
  selectedAction:Action;
  // @ts-ignore
  selectedDate: Date;
  // @ts-ignore
  selectedCategory: Category;

  recents: any[] = [
    { title: ' Title', author: 'Author', categories:'categories', tags: 'tag', date: 'date', key: 'recent1' },
    { title: ' Title2', author: 'Author2', categories:'categories2', tags: 'tag2', date: 'date2', key: 'recent2' },
  ];
  selectedRecent: any[] = [];

  ngOnInit()
  {
    this.actions = [
      {name: 'Edit', code: 'Edit'},
      {name: 'Delete', code: 'Delete'},
    ];

    this.dates = [
      {name: 'Month', code: 'Month'},
    ];

    this.categories = [
      {name: ' Uncategorized', key: 'Un' },
    ]
  }
}


