import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/post.model';
import { Like } from '../shared/like.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  coolLikes = 0;
  dontcareLikes = 0;
  argLikes = 0;

  constructor() { }

  ngOnInit() {
    this.post.likes.forEach((like: Like) => {
      switch (like.type) {
        case 1:
          {
            this.coolLikes++;
            break;
          }
        case 2:
          {
            this.dontcareLikes++;
            break;
          }
          case 3:
          {
            this.argLikes++;
            break;
          }
      }
    });
  }

}
