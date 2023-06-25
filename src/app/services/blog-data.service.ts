import { Injectable } from '@angular/core';
import { getDatabase, ref, push, set} from "firebase/database";
import {Blog} from "../model/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() {
  }

  writeTest(Blog: Blog) {
    const db = getDatabase();
    const PostRef = ref(db, 'blog/' + Blog.id);
    set(PostRef, Blog).then(r => console.log('success'));
  }

}
