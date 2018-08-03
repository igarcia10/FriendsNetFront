import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';
import { Like } from '../shared/like.model';
import { Person } from '../../users/shared/user.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() user: Person;
  @Output() remove = new EventEmitter<Post>();
  coolLikes = 0;
  userCoolLike = false;
  dontcareLikes = 0;
  userDontcareLike = false;
  argLikes = 0;
  userArgLike = false;

  constructor(private postService: PostService) { }

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

  like(likeType: number) {
    const like = new Like();
    like.user = this.user;
    this.postService.addLike(this.post.id, this.user.id, likeType);
    switch (likeType) {
      case 1:
        {
          if (this.userCoolLike) {
            this.userCoolLike = false;
            this.coolLikes--;
          } else if (this.userDontcareLike || this.userArgLike) {
            if (this.userDontcareLike) {
              this.userDontcareLike = false;
              this.dontcareLikes--;
            } else {
              this.userArgLike = false;
              this.argLikes--;
            }
            this.userCoolLike = true;
            this.coolLikes++;
          } else {
            this.userCoolLike = true;
            this.coolLikes++;
          }
          break;
        }
      case 2:
        {
          if (this.userDontcareLike) {
            this.userDontcareLike = false;
            this.dontcareLikes--;
          } else if (this.userCoolLike || this.userArgLike) {
            if (this.userCoolLike) {
              this.userCoolLike = false;
              this.coolLikes--;
            } else {
              this.userArgLike = false;
              this.argLikes--;
            }
            this.userDontcareLike = true;
            this.dontcareLikes++;
          } else {
            this.userDontcareLike = true;
            this.dontcareLikes++;
          }
          break;
        }
      case 3:
        {
          if (this.userArgLike) {
            this.userArgLike = false;
            this.argLikes--;
          } else if (this.userCoolLike || this.userDontcareLike) {
            if (this.userCoolLike) {
              this.userCoolLike = false;
              this.coolLikes--;
            } else {
              this.userDontcareLike = false;
              this.dontcareLikes--;
            }
            this.userArgLike = true;
            this.argLikes++;
          } else {
            this.userArgLike = true;
            this.argLikes++;
          }
          break;
        }
    }
  }

  removePost() {
    this.postService.removePost(this.post.id);
    this.remove.emit(this.post);
  }

}
