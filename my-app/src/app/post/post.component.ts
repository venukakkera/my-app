import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public Posts:Post[]=[];

  constructor( private _postService : PostService) {

      this._postService.getPosts().subscribe(
        (data:any)=>{
          this.Posts= data;
        },
        (err:any)=>{
          alert('Internal server error');
        }

      )
  


   }

  ngOnInit(): void {
  }

}
