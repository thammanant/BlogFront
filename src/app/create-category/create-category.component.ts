import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})

export class CreateCategoryComponent implements OnInit{
  title: string = "";

  bulkAction: any[] = [
    { name: 'Delete', key: 'delete' },
  ];
  selectedAction: any[] = [];
  bulkAction2: any[] = [
    { name: 'Delete', key: 'delete' },
  ];
  selectedAction2: any[] = [];

  searchCat: string = "";
  name: string = "";

  selectedCategories: any[] = [];
  categories: any[] = [
    { name: ' Uncategorized', key: 'Un' },
  ];
  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = new FormGroup({
      checkbox1: new FormControl<string | null>(null)
    });
  }
  // button function
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
  // checkbox function
  func5() {
    //TODO
  }
  func6() {
    //TODO
  }
  func7() {
    //TODO
  }
  // Dropdown function
  func8() {
    //TODO
  }
  func9() {
    //TODO
  }
  func10() {
    //TODO
  }
}

