import {ObjectId} from "mongodb";

export interface Post{
  id: ObjectId
  picture: File
  comment: string
}
