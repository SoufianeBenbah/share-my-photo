import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {

  constructor(private postService: PostService, private _snackBar: MatSnackBar) { }


  file: File[] = this.postService.getter()[0];
  comment : string = this.postService.getter()[1];

  ProcessFile(event: any) {
    this.file = event.target.files
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.file != []) {
      this.postService.postPost(this.file, this.comment).subscribe(
        res => {
          this._snackBar.open("Post submitted.", "Close", {duration: 2000});
        })
    } else {
      this._snackBar.open("Please select a file first !", "Close",{duration: 2000});
    }
   this.comment="";
  }



}
