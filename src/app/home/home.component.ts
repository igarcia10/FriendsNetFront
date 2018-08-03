import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/shared/person.service';
import { Person } from '../users/shared/person.model';
import { PostService } from '../posts/shared/post.service';
import { Post } from '../posts/shared/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Person;
  posts: Post[] = [];

  constructor(private userService: UserService,
              private postService: PostService) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: Person) => {
        this.user = data;
        if (this.user) {
          this.getPosts();
        }
      });
  }

  getPosts() {
    this.postService.getPostsByPersonId(this.user.id)
      .subscribe((data: Post[]) => this.posts = data);
    this.user.friends.forEach((friend: Person) => this.postService.getPostsByPersonId(friend.id)
      .subscribe((data: Post[]) => data.forEach((post: Post) => this.posts.push(post))));
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }

}
