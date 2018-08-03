import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';
import { Like } from '../shared/like.model';
import { Person } from '../../persons/shared/person.model';
import { PostService } from '../shared/post.service';
import { LikeType } from '../shared/like-type.enum';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() person: Person;
  @Output() remove = new EventEmitter<Post>();
  coolLikes = 0;
  personCoolLike = false;
  dontcareLikes = 0;
  personDontcareLike = false;
  argLikes = 0;
  personArgLike = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.post.likes.forEach((like: Like) => {
      switch (like.type) {
        case 'COOL':
          {
            if (like.person.id === this.person.id) {
              this.personCoolLike = true;
            }
            this.coolLikes++;
            break;
          }
        case 'DONTCARE':
          {
            if (like.person.id === this.person.id) {
              this.personDontcareLike = true;
            }
            this.dontcareLikes++;
            break;
          }
        case 'ARG':
          {
            if (like.person.id === this.person.id) {
              this.personArgLike = true;
            }
            this.argLikes++;
            break;
          }
      }
    });
  }

  like(likeType: string) {
    let type: LikeType;
    switch (likeType) {
      case 'COOL':
        {
          if (this.personCoolLike) {
            this.personCoolLike = false;
            this.coolLikes--;
          } else if (this.personDontcareLike || this.personArgLike) {
            if (this.personDontcareLike) {
              this.personDontcareLike = false;
              this.dontcareLikes--;
            } else {
              this.personArgLike = false;
              this.argLikes--;
            }
            this.personCoolLike = true;
            this.coolLikes++;
          } else {
            this.personCoolLike = true;
            this.coolLikes++;
          }
          type = LikeType.COOL;
          break;
        }
      case 'DONTCARE':
        {
          if (this.personDontcareLike) {
            this.personDontcareLike = false;
            this.dontcareLikes--;
          } else if (this.personCoolLike || this.personArgLike) {
            if (this.personCoolLike) {
              this.personCoolLike = false;
              this.coolLikes--;
            } else {
              this.personArgLike = false;
              this.argLikes--;
            }
            this.personDontcareLike = true;
            this.dontcareLikes++;
          } else {
            this.personDontcareLike = true;
            this.dontcareLikes++;
          }
          type = LikeType.DONTCARE;
          break;
        }
      case 'ARG':
        {
          if (this.personArgLike) {
            this.personArgLike = false;
            this.argLikes--;
          } else if (this.personCoolLike || this.personDontcareLike) {
            if (this.personCoolLike) {
              this.personCoolLike = false;
              this.coolLikes--;
            } else {
              this.personDontcareLike = false;
              this.dontcareLikes--;
            }
            this.personArgLike = true;
            this.argLikes++;
          } else {
            this.personArgLike = true;
            this.argLikes++;
          }
          type = LikeType.ARG;
          break;
        }
    }
    this.postService.addLike(this.post.id, this.person.id, type)
      .subscribe((data: Post) => this.post = data);
  }

  removePost() {
    this.postService.removePost(this.post.id);
    this.remove.emit(this.post);
  }

}
