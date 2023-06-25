import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get, set} from "firebase/database";
import {Blog} from "../model/blog";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  createBlogDB(Blog: Blog) {
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
    const categoryRef = ref(db, 'categories/' + title.toLowerCase());
    set(categoryRef, {
      name: title,
      key: title.toLowerCase()
    }).then(r => console.log('success'));
  }

  getBlogDB(id: string) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `blog/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
        console.error(error);
      }
    );
  }

  updateBlogDB(Blog: Blog) {
    const db = getDatabase();
    const PostRef = ref(db, 'blog/' + Blog.id);
    set(PostRef, Blog).then(r => console.log('success'));
  }

  getAllBlogsDB() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `blog`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
        console.error(error);
      }
    );
  }

  getAllCategoriesDB() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `categories`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
        console.error(error);
      }
    );
  }




}
