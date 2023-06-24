import { Component} from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})

export class CreateCategoryComponent{
  title: string = "";
  bulkAction: any;
  selectedAction: any;
  searchCat: string = "";
  name: string = "";
  checked: boolean = false;
  selectedCategories: any[] = [];
  categories: any[] = [
    { name: ' Uncategorized', key: 'Un' },
  ];
}
