import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {DataService} from "../services/data.service";
import {CategoryService} from "../services/category.service";
import { Router } from '@angular/router';

interface Action {
  name: string;
  key: string;
}

@Component({
  selector: 'app-recent-view',
  templateUrl: './recent-view.component.html',
  styleUrls: ['./recent-view.component.scss']
})
export class RecentViewComponent implements OnInit{
  Allcount: number = 0;
  Publishedcount: number = 0;
  bulkAction: Action[] = [
    { name: 'Edit', key: 'edit' },
    { name: 'Move to Trash', key: 'trash' },
  ];
  selectedAction: Action = { name: '', key: 'none' };

  allDates: any[] = [
    { name: 'All Date', key: 'alldate' },
  ];
  selectedDate: any[] = [];

  allCategories: any[] = [
    { title: 'All Categories', key: 'allcategories' },
  ];
  selectedCat: any[] = [];

  selectedBlog: any[] = [];
  blogs: any[] = [];
  db_blogs: any[] = [];
  bulkAction2: Action[] = [
    { name: 'Edit', key: 'edit' },
    { name: 'Move to Trash', key: 'trash' },
  ];
  selectedAction2: Action[] = [];

  constructor(private dataService: DataService, private categoryService: CategoryService,private router: Router) {
  }

  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = new FormGroup({
      checkbox1: new FormControl<string | null>(null)
    });

    this.categoryService.fetchCategoriesFromDatabase();

    this.dataService.allCategories$.subscribe(
      (categories: any[]) => {
        // Add the fetched categories to the allCategories array
        this.allCategories = this.allCategories.concat(categories);
      }
    );

    this.dataService.getAllBlogsDB().subscribe(
      (data: any) => {
        this.blogs = Object.values(data).map((blog: any) => {
          if (Array.isArray(blog.categories)) {
            if (blog.categories.length <= 2) {
              blog.categories = blog.categories.map((category: any) => category.title).join(', ');
            } else {
              // If there are more than two categories, display the first two followed by ", ... so html won't break"
              const categoryTitles = blog.categories.slice(0, 2).map((category: any) => category.title);
              blog.categories = categoryTitles.join(', ') + ', ...';
            }
          }

          this.Allcount += 1;

          if (blog.status === "Publish")
            this.Publishedcount += 1;
          return blog;
        });
      },
      (error: any) => {
        console.error('Failed to fetch blog data:', error);
      }
    );
  }

  searchQuery: string = '';

  applySearch() {
    if (this.searchQuery.trim() === '') {
      this.blogs = this.blogs; // This line is not necessary, you can remove it
    } else {
      const searchQueryLowerCase = this.searchQuery.trim().toLowerCase();
      this.blogs = this.blogs.filter((blog: any) => blog.id.toLowerCase().includes(searchQueryLowerCase));
    }

    this.Allcount = this.blogs.length;
    this.Publishedcount = this.blogs.filter((blog: any) => blog.status === 'Publish').length;
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
  func6() {
    //TODO
  }
  func13() {
    //TODO
  }
  //Dropdown function
  func5() {
    //TODO
  }
  func7() {
    //TODO
  }
  toCreateView() {
    this.router.navigate(['/create']);
  }

  toCategoryView() {
    this.router.navigate(['/category']);
  }

  toEditView() {
      this.router.navigate(['/edit']);
  }

  applyBulkAction() {
    if (this.selectedAction.key === 'trash') {
      this.selectedBlog.forEach((blog: any) => {
        this.dataService.deleteBlogDB(blog.id);
      });
    }
    else if (this.selectedBlog.length == 1 && this.selectedAction.key === 'edit') {
      this.toEditView();
    }
    else {
      console.log('Please select a valid action && Please select only one blog if you want to edit');
    }
  }

  func10() {
    //TODO
  }
  func11() {
    //TODO
  }

}



