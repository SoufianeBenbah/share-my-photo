import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";



@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {

  constructor(private postService: PostService) { }


  file: File | any;
  comment : string = '';

  ProcessFile(event: any) {
    this.file = event.target.files[0]
    }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.file != null) {
      this.postService.postPost(this.file, this.comment).subscribe(
        res => {
          window.alert("Uploaded");
        })
    } else {
        window.alert("Please a file first !");
    }
  }


}
