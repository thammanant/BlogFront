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

  createCategory(): void {
    const newCategory = {
      title: this.title,
      key: this.title.toLowerCase().replace(/\s/g, '-')
    };

    // Check if the category already exists
    const existingCategory = this.categories.find(category =>
      category.key !== 'Un' && category.title && category.title.localeCompare(newCategory.title) === 0
    );

    if (existingCategory) {
      console.log('Category already exists:', existingCategory);          //change to add count of that category
      this.title = '';
      return;
    }

    // Check if the user did not enter a category name or just the spaces
    const newCategoryTitle = newCategory.title.trim(); // Trim whitespace from the input

    if (!newCategoryTitle) {
      console.log('Please enter a valid category name.');
      this.title = '';
      return;
    }

    // Find the index to insert the new category
    const insertIndex = this.categories.findIndex(category =>
      category.key !== 'Un' &&  category.title && category.title.localeCompare(newCategory.title) === 1
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

    this.categoryService.categories$.subscribe((categories: any[]) => {
      this.categories = categories;
      console.log('Categories Length:', this.categories.length);

      // Check if the categories array is empty or not after get the data from the database
      if (this.categories.length === 0) {
        this.createUncategorizedCategory();
      } else {
        console.log('Categories:', this.categories);
      }
    });

    this.categoryService.fetchCategoriesFromDatabase();
  }

  createUncategorizedCategory(): void {
    const existingUncategorized = this.categories.find(category => category.key === 'Un');
    if (!existingUncategorized) {
      const uncategorized = { title: 'Uncategorized', key: 'Un' };
      this.BlogDataService.createCategoryDB(uncategorized);
      console.log('New category created:', uncategorized);
    }
    this.title = ''; // Reset the title property
  }

}
