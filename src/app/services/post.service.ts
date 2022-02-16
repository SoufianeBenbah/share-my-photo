import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from '../post.model';
import {ObjectId} from "mongodb";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = 'http://localhost:3000/posts/';

  constructor(private http:HttpClient) { }

  public getPosts() : Observable<any>{
    return this.http.get(this.baseUrl)
  }

  public postPost(file: File, comment: string) : Observable<any>{
    let formParams = new FormData();
    formParams.append("picture", file);
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

}
