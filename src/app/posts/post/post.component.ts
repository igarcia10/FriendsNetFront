import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/post.model';
import { Like } from '../shared/like.model';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() user: User;
  coolLikes = 0;
  userCoolLike = false;
  dontcareLikes = 0;
  userDontcareLike = false;
  argLikes = 0;
  userArgLike = false;

  constructor() { }

  ngOnInit() {
    this.post.likes.forEach((like: Like) => {
      switch (like.type) {
        case 1:
          {
            if (like.user.id === this.user.id) {
              this.userCoolLike = true;
            }
            this.coolLikes++;
            break;
          }
        case 2:
          {
            if (like.user.id === this.user.id) {
              this.userDontcareLike = true;
            }
            this.dontcareLikes++;
            break;
          }
          case 3:
          {
            if (like.user.id === this.user.id) {
              this.userArgLike = true;
            }
            this.argLikes++;
            break;
          }
      }
    });
  }

}
