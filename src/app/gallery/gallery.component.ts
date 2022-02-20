import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../post.model";
import {Observable} from "rxjs";
import { Router } from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  filter: string | any ;
  api : string = "http://localhost:3000/"
  posts: Observable<Post[]> | any;
  post: Observable<Post> | any;
  constructor(private postService: PostService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

  deletePost(id : string){
    this.postService.deletePost(id).subscribe();
    this.ngOnInit()
    this._snackBar.open("Post is deleted", "Close", {duration: 2000})
  }

  deleteAll() {
    this.postService.deleteAll().subscribe();
    this.ngOnInit()
    this._snackBar.open("All posts deleted","Close", {duration: 2000})
  }

  find() {
    this.posts = this.postService.getByComment(this.filter);
  }

  clearInput() {
    this.filter = '';
    this.ngOnInit();
  }

  update(id : string) {
    this.post = this.postService.getPost(id).subscribe((val : any)=>
    {
      console.log(val.comment)
    });
    this.postService.setter(this.post.file, this.post.comment);
    //this.router.navigate(["/add"])
    console.log(this.post.comment)
  }


}
