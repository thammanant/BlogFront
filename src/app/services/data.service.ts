import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get, set, query, orderByChild} from "firebase/database";
import {getAuth} from "@angular/fire/auth";
import {Blog} from "../model/blog";
import {remove, update} from "@angular/fire/database";

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
    const categoryRef = ref(db, 'categories/' + title);
    set(categoryRef, {
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

  updateBlogDB(id:string,Blog: Blog) {
    const db = getDatabase();
    const PostRef = ref(db, 'blog/' + id);
    update(PostRef, Blog).then(r => console.log('success'));
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
  deleteBlogDB(id: string) {
    const db = getDatabase();
    const PostRef = ref(db, 'blog/' + id);
    remove(PostRef).then(r => console.log('success'));
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




























