import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get, set } from '@firebase/database';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  constructor() {}

  createBlogDB(title: string, id: string) {
    const blog = { title: title, id: id };
    const dbRef = ref(getDatabase());

    get(child(dbRef, `blog/${blog.id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const db = getDatabase();
        const postRef = ref(db, 'blog/' + blog.id);
        set(postRef, blog).then(r => console.log('success'));
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  createCategoryDB(category: any) {
    const db = getDatabase();
    const categoryRef = ref(db, 'categories/' + category.key);
    set(categoryRef, {
      name: category.title,
      key: category.key
    }).then(r => console.log('success'));
  }

}
