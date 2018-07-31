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

  @Input() user: User;
  posts: Post[];

  constructor(private userService: UserService,
    private postService: PostService) {
    this.user = new User();
  }

  ngOnInit() {
    this.postService.getPostsByPersonId(this.user.id)
      .subscribe((data: Post[]) => this.posts = data);
  }

}
