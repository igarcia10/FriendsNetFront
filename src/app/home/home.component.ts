import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/shared/person.service';
import { Person } from '../persons/shared/person.model';
import { PostService } from '../posts/shared/post.service';
import { Post } from '../posts/shared/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Person;
  posts: Post[];

  constructor(private userService: PersonService,
              private postService: PostService) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: Person) => {
        this.person = data;
        if (this.person) {
          this.getPosts();
        }
      });
  }

  getPosts() {
    this.postService.getPostsByPersonId(this.person.id)
      .subscribe((data: Post[]) => {
        if (this.posts) {
          this.posts = this.posts.concat(data);
        } else {
          this.posts = data;
        }
      });
    this.person.friends.forEach((friend: Person) => this.postService.getPostsByPersonId(friend.id)
      .subscribe((data: Post[]) => {
        if (this.posts) {
          this.posts = this.posts.concat(data);
        } else {
          this.posts = data;
        }
      }));
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }

}
