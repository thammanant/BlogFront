import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get, set} from "firebase/database";
import {Blog} from "../model/blog";
import {remove, update} from "@angular/fire/database";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // I want to get the specific blog from the database
  getBlogDB(id: string) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `blog/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    }).catch((error) => {
        console.error(error);
      }
    );
  }

  createBlogDB(blog: Blog) {
    const db = getDatabase();
    const postRef = ref(db, 'blog/' + blog.id);

    set(postRef, blog)
      .then(() => {
        console.log('Blog created successfully');
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  }

  createCategoryDB(title: string) {
    const db = getDatabase();
    const categoryRef = ref(db, 'categories/' + title.replace(/\s+/g, ' ').toLowerCase().trim());
    set(categoryRef, {
      title: title.replace(/\s+/g, ' ').trim(),
      count:0
    }).then(r => console.log('success'));
  }

  getAllBlogsDB(): Observable<any[]> {
    return from(
      get(child(ref(getDatabase()), 'blog')).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return snapshot.val();
        } else {
          console.log('No data available');
          return [];
        }
      })
    );
  }

  // getAllCategoriesDB() {
  //   const dbRef = ref(getDatabase());
  //   get(child(dbRef, `categories`)).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //       return snapshot.val();
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  //get all categories of each blog by category key
  getAllCategoriesOfBlogDB(categoryKey: string): Promise<number> {
    const dbRef = ref(getDatabase());
    return new Promise<number>((resolve, reject) => {
      get(child(dbRef, 'blog')).then((snapshot) => {
        if (snapshot.exists()) {
          const blogs = snapshot.val();
          const count = Object.values(blogs).reduce((accumulator: number, blog: any) => {
            if (blog.category && blog.category.key === categoryKey) {
              return accumulator + 1;
            }
            return accumulator;
          }, 0);

          console.log(count);
          resolve(count);
        } else {
          console.log('No data available');
          resolve(0);
        }
      }).catch((error) => {
        console.error(error);
        reject(error);
      });
    });
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
    const PostRef = ref(db, 'categories/' + title.replace(/\s+/g, ' ').toLowerCase().trim());
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

  async updateCategoryCountForSelected(selectedCategories: any[], countToAdd: number) {
    const db = getDatabase();
    const validCategories = selectedCategories.filter((category) => category && category.title);

    const updatePromises = validCategories.map(async (category) => {
      const categoryRef = ref(db, 'categories/' + category.title.toLowerCase().trim());
      try {
        // Fetch the current category from the database
        const snapshot = await get(categoryRef);
        const currentCategory = snapshot.val();

        if (currentCategory) {
          // Update the count by adding countToAdd
          const newCount = (currentCategory.count || 0) + countToAdd;

          // Set the updated count back to the database
          await set(categoryRef, {
            ...currentCategory,
            count: newCount,
          });

          console.log('Category count updated:', currentCategory.title, 'New Count:', newCount);
        }
      } catch (error) {
        console.error('Error updating category count:', category.title, error);
      }
    });

    try {
      // Wait for all the update promises to complete
      await Promise.all(updatePromises);
    } catch (error) {
      console.error('Error updating category counts:', error);
    }
  }

  async checkIfBlogExists(title: string, date: string): Promise<boolean> {
    const db = getDatabase();
    const blogsRef = ref(db, 'blog'); // Use 'blog' instead of 'blogs' since that's the key for the blogs node

    try {
      const snapshot = await get(blogsRef);
      const blogs = snapshot.val();

      if (blogs) {
        // Loop through each blog in the database
        for (const blogId in blogs) {
          const blog: Blog = blogs[blogId];

          // Check if the blog has the same title and date as the one we are trying to create
          if (blog['title'] === title && blog['date'] === date) {
            return true; // Blog with the same title and date already exists
          }
        }
      }
    } catch (error) {
      console.error('Error checking if blog exists:', error);
    }

    return false; // Blog with the same title and date does not exist
  }

}
