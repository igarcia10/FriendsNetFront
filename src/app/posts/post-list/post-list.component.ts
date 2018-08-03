import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';
import { Person } from '../../users/shared/person.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() user: Person;
  @Input() posts: Post[];
  @Output() remove = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit() {
    this.posts.sort((a, b) => a.creationDate.getDate() - b.creationDate.getDate());
  }

  removePost(post: Post) {
    this.remove.emit(post);
  }

}
