import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/shared/user.service';
import { User } from '../users/shared/user.model';
import { Person } from '../persons/shared/person.model';
import { PostService } from '../posts/shared/post.service';
import { Post } from '../posts/shared/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  persons: Person[] = [];
  posts: Post[] = [];

  constructor(private userService: UserService,
              private postService: PostService) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: User) => {
        this.user = data;
        if (this.user) {
          this.getPersons();
          this.getPosts();
        }
      });
  }

  getPosts() {
    this.postService.getPostsByPersonId(this.user.id)
      .subscribe((data: Post[]) => this.posts = data);
  }

  getPersons() {
    this.user.friends.forEach((friend: any) => {
      const p = new Person();
      p.user = friend;
      p.isFriend = true;
      this.persons.push(p);
    });
  }

  removePost(post: Post) {
    this.posts.slice(this.posts.indexOf(post), 1);
  }

}
