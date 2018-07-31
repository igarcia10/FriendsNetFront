import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../users/shared/user.model';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postListEnum: PostListEnum;
  @Input() user: User;
  posts: Post[];

  constructor(private userService: UserService,
    private postService: PostService) {
    this.user = new User();
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    if (this.postListEnum == 1) {
      this.postService.getPostsByPersonId(this.user.id)
        .subscribe((data: Post[]) => this.posts = data);
      this.user.friends.forEach((friend: User) => this.postService.getPostsByPersonId(friend.id)
        .subscribe((data: Post[]) => data.forEach((post: Post) => this.posts.push(post))));
    } else {
      this.postService.getPostsByPersonId(this.user.id)
        .subscribe((data: Post[]) => this.posts = data);
    }
  }

}
