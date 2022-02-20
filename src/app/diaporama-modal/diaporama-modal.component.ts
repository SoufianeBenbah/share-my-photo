import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Observable} from "rxjs";
import {Post} from "../post.model";

@Component({
  selector: 'app-diaporama-modal',
  templateUrl: './diaporama-modal.component.html',
  styleUrls: ['./diaporama-modal.component.css']
})
export class DiaporamaModalComponent implements OnInit {

  constructor(private postService: PostService) { }
  api : string = "http://localhost:3000/"
  posts : Observable<Post[]> | any;
  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

}
