import { CategoryService } from '../services/category.service';
import {DataService} from "../services/data.service";
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';



interface Action {
  name: string;
  key: string;
}

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})

export class CreateCategoryComponent implements OnInit{
  title: string = "";

  bulkAction: Action[] = [
    { name: 'Delete', key: 'delete' },
  ];
  selectedAction: Action = { name: '', key: 'none' };
  selectedCategories: any[] = [];

  searchCat: string = "";
  categories: any[] = []
  private categoriesSubscription: Subscription | undefined;


  constructor(private categoryService: CategoryService, private DataService:DataService, private router: Router, private formBuilder: FormBuilder) {
  }
  async applySearch(): Promise<void> {
    await this.categoryService.fetchCategoriesFromDatabase();
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe(); // Unsubscribe to prevent further updates
    }
    this.categoriesSubscription = this.categoryService.categories$.subscribe((categories: any[]) => {
      this.categories = categories;

      // search related to searchCat
      const searchQuery = this.searchCat.replace(/\s+/g, ' ').trim().toLowerCase();

      const filteredCategories = this.categories.filter(category =>
        category.title.replace(/\s+/g, ' ').toLowerCase().trim().includes(searchQuery)
      );

      this.updateCategories(filteredCategories);
    });
  }

  updateCategories(categories: any[]): void {
    this.categories = categories;
  }

  createCategory(): void {
    const newCategory = {
      title: this.title.replace(/\s+/g, ' ').trim(),
      key: this.title.replace(/\s+/g, ' ').toLowerCase().trim()
    };

    // Check if the category already exists
    const existingCategory = this.categories.find(category =>
      category.title.toLowerCase() === newCategory.key
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
      category.title.toLowerCase() !== 'uncategorized' && category.title.localeCompare(newCategory.title) === 1
    );

    // If no suitable index found, insert at the end
    const indexToInsert = insertIndex === -1 ? this.categories.length : insertIndex;

    // Insert the new category at the determined index
    this.categories.splice(indexToInsert, 0, newCategory);

    this.DataService.createCategoryDB(newCategory.title);
    console.log('New category created:', newCategory);
    this.title = ''; // Reset the title property
  }
  goToRecentView(): void {
    this.router.navigate(['/recent']);
  }

  deleteCategory(): void {
    console.log('Selected cat:', this.selectedCategories);
    console.log('Selected Action:', this.selectedAction);

    if (this.selectedAction.key === 'delete') {
      // Check if the user has selected any category
      if (this.selectedCategories.length === 0) {
        console.log('Please select at least one category to delete.');
        return;
      }

      // Check if the user has selected the "Uncategorized" category
      const hasUncategorized = this.selectedCategories.find(category => category.title.toLowerCase() === 'uncategorized');
      if (hasUncategorized) {
        console.log('Cannot delete Uncategorized category.');
        return;
      }

      // Delete the selected categories
      this.selectedCategories.forEach(category => {
        const index = this.categories.indexOf(category);
        if (index !== -1) {
          this.categories.splice(index, 1);
        }
        this.DataService.deleteCategoryDB(category.title);
        console.log('Category deleted:', category);
      });
    }
  }

  formGroup!: FormGroup;
  status_check: boolean = false;        //for the name checkbox


  ngOnInit() {
    this.formGroup = new FormGroup({
      checkbox1: new FormControl<string | null>(null)
    });
    this.categoryService.fetchCategoriesFromDatabase();
    this.categoryService.categories$.subscribe((categories: any[]) => {
      this.categories = categories;

    });

    this.formGroup = this.formBuilder.group({
      nameCheckbox: new FormControl(false),
      anotherCheckbox: new FormControl(false)
    });

    const nameCheckbox = this.formGroup.get('nameCheckbox');
    const anotherCheckbox = this.formGroup.get('anotherCheckbox');

    if (nameCheckbox && anotherCheckbox) {
      this.formGroup.valueChanges.subscribe(formValue => {
        if (!this.status_check) {
          if (formValue.nameCheckbox) {
            this.status_check = true;
            anotherCheckbox.setValue(true);
          } else if (formValue.anotherCheckbox) {
            this.status_check = true;
            nameCheckbox.setValue(true);
          }
        } else {
          if (!formValue.nameCheckbox || !formValue.anotherCheckbox) {
            this.status_check = false;
            nameCheckbox.setValue(false);
            anotherCheckbox.setValue(false);
          }
        }
      });
    }

    this.categoryService.fetchCategoriesFromDatabase();
    this.categoriesSubscription = this.categoryService.categories$.subscribe((categories: any[]) => {
      this.categories = categories;
    });
  }
}
