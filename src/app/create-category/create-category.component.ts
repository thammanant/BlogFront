import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})

export class CreateCategoryComponent implements OnInit{
  title: string = "";
  bulkAction: any;
  selectedAction: any;
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
}
