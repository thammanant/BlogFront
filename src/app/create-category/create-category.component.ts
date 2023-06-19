import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
  title: string = '';

  constructor(private categoryService: CategoryService) {}

  createItem(): void {
    this.categoryService.addCategory(this.title);
    this.title = '';
  }
}
