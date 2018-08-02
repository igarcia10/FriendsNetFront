import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[];

  constructor() {
  }

  ngOnInit() {
    this.posts.sort((a, b) => a.creationDate.getDate() - b.creationDate.getDate());
  }

}
