import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';
import { Person } from '../../users/shared/person.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() person: Person;
  @Input() posts: Post[];
  @Output() remove = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit() {
  }

  removePost(post: Post) {
    this.remove.emit(post);
  }

}
