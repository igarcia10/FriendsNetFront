import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { Person } from '../../persons/shared/person.model';
import { Like } from '../shared/like.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() person: Person;
  @Output() newPost = new EventEmitter<Post>();
  post: Post = new Post();

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  addPost() {
    if (this.post.text) {
      this.post.person = this.person;
      const likes: Like[] = [];
      this.post.likes = likes;
      this.post.creationDate = new Date();
      this.postService.postPost(this.post)
        .subscribe((data: Post) => this.newPost.emit(data));
      this.post = new Post();
    }
  }

}
