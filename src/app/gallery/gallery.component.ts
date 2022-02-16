import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../post.model";
import {Observable} from "rxjs";
import {ObjectId} from "mongodb";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  filter: string | any ;
  api : string = "http://localhost:3000/"
  posts: Observable<Post[]> | any;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

  deletePost(id : string){
    this.postService.deletePost(id).subscribe();
    this.ngOnInit();
  }

  deleteAll() {
    this.postService.deleteAll().subscribe();
    this.ngOnInit();
  }

  find() {
    this.posts = this.postService.getByComment(this.filter);
  }


}
