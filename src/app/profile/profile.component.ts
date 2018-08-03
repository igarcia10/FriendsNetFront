import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/shared/person.service';
import { Person } from '../users/shared/person.model';
import { CustomPerson } from '../persons/shared/custom-person.model';
import { PostService } from '../posts/shared/post.service';
import { Post } from '../posts/shared/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Person;
  persons: CustomPerson[] = [];
  posts: Post[] = [];

  constructor(private userService: UserService,
              private postService: PostService) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: Person) => {
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
      const p = new CustomPerson();
      p.user = friend;
      p.isFriend = true;
      this.persons.push(p);
    });
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }

}
