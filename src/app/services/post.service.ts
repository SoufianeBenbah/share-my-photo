import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Post} from "../post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  file: File[] | any;
  comment : string = '';

  private baseUrl: string = 'http://localhost:3000/posts/';

  constructor(private http:HttpClient) { }

  public getPosts() : Observable<any>{
    return this.http.get(this.baseUrl)
  }

  public getPost(id : string) : Observable<any> {
    return this.http.get(this.baseUrl+id);
  }

  public postPost(files: File[], comment: string) : Observable<any>{
    let formParams = new FormData();
    for (let file of files){
      formParams.append("picture", file)
    }
    formParams.append("comment", comment);
    return this.http.post(this.baseUrl, formParams);
  }

  public deletePost(id: string) : Observable<any> {
    return this.http.delete(this.baseUrl+id);
  }

  public deleteAll() : Observable<any>{
     return this.http.delete(this.baseUrl);
  }

  public getByComment(comment : string) : Observable<any> {
    return this.http.get(this.baseUrl+comment)
  }

  public setter(file : File[], comment: string) : void {
    this.file = file;
    this.comment = comment;
  }

  public getter() : [File[], string]{
    return [this.file, this.comment];
  }

}
