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
    { title: ' dog with the dragon', author: 'Author1', categories:'categories1', tags: 'tag1', date: 'date', key: 'recent1' },
    { title: ' elephant eat crocodile', author: 'Author2', categories:'categories2', tags: 'tag2', date: 'date2', key: 'recent2' },
    { title: ' tfst', author: 'Author3', categories:'categories3', tags: 'tag3', date: 'date3', key: 'recent3' },
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



