import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get, set} from "firebase/database";
import {Blog} from "../model/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() {
  }

  writeTest(Blog: Blog) {
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

  createCategoryDB(title: string) {
    const db = getDatabase();
    const categoryRef = ref(db, 'categories/' + title.toLowerCase().replace(/\s/g, '-'));
    set(categoryRef, {
      name: title,
      key: title.toLowerCase().replace(/\s/g, '-')
    }).then(r => console.log('success'));
  }



}
