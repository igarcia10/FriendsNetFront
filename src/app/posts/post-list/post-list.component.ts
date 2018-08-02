import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() user: User;
  @Input() posts: Post[];
  @Output() remove = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit() {
    this.posts.sort((a, b) => a.creationDate.getDate() - b.creationDate.getDate());
  }

  removePost(post: Post) {
    this.posts.slice(this.posts.indexOf(post), 1);
    this.remove.emit(post);
  }

}
