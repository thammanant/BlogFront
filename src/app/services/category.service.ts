import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue, runTransaction, DataSnapshot } from '@firebase/database';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: any[] = [];
  public categories$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private dates: any[] = [];
  public dates$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private DataService:DataService) {
    this.fetchCategoriesFromDatabase();
    this.fetchDateFromDatabase();
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
      this.performOnInitLogic();

    });
  }

  //fetch date from database
  fetchDateFromDatabase(): void {
    const dbRef = ref(getDatabase(), 'blog');
    onValue(dbRef, (snapshot: DataSnapshot) => {
      const dates: any[] = [];
      snapshot.forEach((childSnapshot: DataSnapshot) => {
        const date = childSnapshot.val();
        dates.push(date);
      });
      this.updateCategories(dates);   //update dates
    });
  }

  createUncategorizedCategory(): void {
    const existingUncategorized = this.categories.find(category => category.title.toLowerCase() === 'uncategorized');
    if (!existingUncategorized) {
      const uncategorized = { title: 'Uncategorized'};
      this.DataService.createCategoryDB(uncategorized.title);
      console.log('New category created:', uncategorized);
    }
  }

  private performOnInitLogic(): void {
    if (this.categories.length === 0) {
      this.createUncategorizedCategory();
    }
  }

  private updateCategories(categories: any[]): void {
    this.categories = categories;
    this.categories$.next(this.categories);
  }

  private updateDates(dates: any[]): void {
    this.dates = dates;
    this.dates$.next(this.dates);
  }

}
