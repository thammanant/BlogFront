import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get, set} from "@firebase/database";
import {Blog} from "../model/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() {
  }

  createBlogDB(title: string, id: string) {
    const Blog = { title: title, id: id };
    const dbRef = ref(getDatabase());
    get(child(dbRef, `blog/${Blog.id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const db = getDatabase();
        const PostRef = ref(db, 'blog/' + Blog.id);
        set(PostRef, Blog).then(r => console.log('success'));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
        console.error(error);
      }
    );
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
