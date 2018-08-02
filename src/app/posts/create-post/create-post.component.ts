import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { User } from '../../users/shared/user.model';
import { Like } from '../shared/like.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() user: User;
  @Output() newPost = new EventEmitter<Post>();
  post: Post = new Post();
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((data: Post[]) => this.posts = data);
  }

  addPost() {
    if (this.post.text) {
      this.post.user = this.user;
      const likes: Like[] = [];
      this.post.likes = likes;
      this.post.creationDate = new Date();
      this.postService.postPost(this.post)
        .subscribe((data: Post) => {
          this.posts.push(data);
          this.newPost.emit(data);
        });
      this.post = new Post();
    }
  }

}
