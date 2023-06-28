import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue, DataSnapshot } from '@firebase/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: any[] = [];
  public categories$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {
    this.fetchCategoriesFromDatabase();
  }

  fetchCategoriesFromDatabase(): void {
    const dbRef = ref(getDatabase(), 'categories');
    onValue(dbRef, (snapshot: DataSnapshot) => {
      const categories: any[] = [];
      snapshot.forEach((childSnapshot: DataSnapshot) => {
        const category = childSnapshot.val();
        categories.push(category);
      });
      this.updateCategories(categories);
    });
  }

  private updateCategories(categories: any[]): void {
    this.categories = categories;
    this.categories$.next(this.categories);
  }
}
