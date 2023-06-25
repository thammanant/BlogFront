import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: any[] = [];
  private categoriesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  public categories$ = this.categoriesSubject.asObservable();

  constructor() { }

  addCategory(title: string): void {
    const category = { name: title, key: title.toLowerCase().replace(/\s/g, '-') };
    this.categories.push(category);
    this.categoriesSubject.next(this.categories);
  }

  getCategories(): any[] {
    return this.categories;
  }

  getCategoryCount(): number {
    return this.categories.length;
  }
}
