import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  personne: any;
  comments: Comment[] = [];
  newComment = false;
  comment: Comment ={id:-1, content:"", date: new Date()};
  
  constructor(private aboutService: AboutService){}
  ngOnInit(): void {
    this.personne = this.aboutService.getPersonne();
    this.comments = this.aboutService.getComments();
  }
  addComment(){
    if(this.comment.content != ""){
      this.aboutService.addComment({
        id: this.comment.id,
        content: this.comment.content,
        date: new Date()
      });
      this.comment.content = ""
    }
  }


}
