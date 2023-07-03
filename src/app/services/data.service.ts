import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get, set} from "firebase/database";
import {Blog} from "../model/blog";
import {remove, update} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  createBlogDB(blog: Blog) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `blog/${blog.id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const db = getDatabase();
        const postRef = ref(db, 'blog/' + blog.id);
        set(postRef, blog).then(() => {
          console.log('Success');
        }).catch((error) => {
          console.error('Error: ', error);
        });
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error('Error: ', error);
    });
  }

  createCategoryDB(title: string) {
    const db = getDatabase();
    const categoryRef = ref(db, 'categories/' + title.replace(/\s+/g, ' ').toLowerCase().trim());
    set(categoryRef, {
      title: title.replace(/\s+/g, ' ').trim()
    }).then(r => console.log('success'));
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

  getBlogFromID(id: string) {
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

  getBlogCategoryDB(blogID: string) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `blog/${blogID}/category`)).then((snapshot) => {
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

  updateBlogDB(id:string,Blog: Blog) {
    const db = getDatabase();
    const PostRef = ref(db, 'blog/' + id);
    update(PostRef, Blog).then(r => console.log('success'));
  }

  deleteBlogDB(id: string) {
    const db = getDatabase();
    const PostRef = ref(db, 'blog/' + id);
    remove(PostRef).then(r => console.log('success'));
  }

  deleteCategoryDB(title: string) {
    const db = getDatabase();
    const PostRef = ref(db, 'categories/' + title);
    remove(PostRef).then(r => console.log('success'));
  }

  getAllCategoriesName() {
    let listName:string[] = [];
    const dbRef = ref(getDatabase());
    get(child(dbRef, `categories`)).then((snapshot) => {
      if(snapshot.exists()){
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.key != null){
            listName.push(childSnapshot.key);
          }
        }
        );
      }
      else{
        console.log("No data available");
      }
      console.log(listName)
      return listName;
    }).catch((error) => {
        console.error(error);
      }
    );
  }

  getAllNameBlog() {
    let listName:string[] = [];
    const dbRef = ref(getDatabase());
    get(child(dbRef, `blog`)).then((snapshot) => {
      if(snapshot.exists()){
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.key != null){
            listName.push(childSnapshot.key);
          }
        }
        );
      }
      else{
        console.log("No data available");
      }
      console.log(listName)
      return listName;
    }).catch((error) => {
        console.error(error);
      }
    );
  }

}
