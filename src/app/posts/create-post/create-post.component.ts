import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() user: User;
  post: Post = new Post();
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((data: Post[]) => this.posts = data);
  }

  addPost() {
    this.post.user = this.user;
    this.post.likes = null;
    this.post.creationDate = new Date();
    this.postService.postPost(this.post)
      .subscribe((data: Post) => this.posts.push(data));
    this.post = new Post();
  }

}
