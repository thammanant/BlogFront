import { CategoryService } from '../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(private categoryService: CategoryService) {}

  createItem(): void {
    this.categoryService.addCategory(this.title);
    this.title = '';
  }
  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = new FormGroup({
      checkbox1: new FormControl<string | null>(null)
    });
  }
}
