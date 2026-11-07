import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  personne = {
    name: "saeuf",
    email: "saeuf@gmail.com",
    tel: +21654999156
  }
  comment: Comment = {id:-1, content:"",date:new Date};
  comments: Comment[] = [];
  constructor() { }

  getPersonne(){
    return this.personne;
  }
  getComments(){
    return this.comments
  }
  addComment(c: Comment){
    c.date = new Date;
    const len = this.comments.length;
    c.id = len+1;
    this.comments.push(c);
  }
}
