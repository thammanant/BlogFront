import { CategoryService } from '../services/category.service';
// @ts-ignore
import {BlogDataService} from "../services/blog-data.service";
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
    { title: ' Uncategorized', key: 'Un' },
  ];
  constructor(private categoryService: CategoryService, private BlogDataService:BlogDataService) {}

  // createItem(): void {
  //   this.categoryService.addCategory(this.title);
  //   //database
  //   this.title = '';
  // }

  createCategory(): void {
    const newCategory = {
      title: this.title,
      key: this.title.toLowerCase().replace(/\s/g, '-')
    };

    // Check if the category already exists
    const existingCategory = this.categories.find(category =>
      category.key !== 'Un' && category.title.localeCompare(newCategory.title) === 0
    );

    if (existingCategory) {
      console.log('Category already exists:', existingCategory);          //change to add count of that category
      return;
    }

    // Find the index to insert the new category
    const insertIndex = this.categories.findIndex(category =>
      category.key !== 'Un' && category.title.localeCompare(newCategory.title) === 1
    );

    // If no suitable index found, insert at the end
    const indexToInsert = insertIndex === -1 ? this.categories.length : insertIndex;

    // Insert the new category at the determined index
    this.categories.splice(indexToInsert, 0, newCategory);

    this.BlogDataService.createCategoryDB(newCategory);
    console.log('New category created:', newCategory);
    this.title = ''; // Reset the title property
  }

  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = new FormGroup({
      checkbox1: new FormControl<string | null>(null)
    });
  }
}
