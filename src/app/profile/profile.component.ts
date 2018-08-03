import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/shared/person.service';
import { Person } from '../persons/shared/person.model';
import { CustomPerson } from '../custom-persons/shared/custom-person.model';
import { PostService } from '../posts/shared/post.service';
import { Post } from '../posts/shared/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  person: Person;
  customPersons: CustomPerson[] = [];
  posts: Post[] = [];

  constructor(private userService: PersonService,
              private postService: PostService) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: Person) => {
        this.person = data;
        if (this.person) {
          this.getPersons();
          this.getPosts();
        }
      });
  }

  getPosts() {
    this.postService.getPostsByPersonId(this.person.id)
      .subscribe((data: Post[]) => this.posts = data);
  }

  getPersons() {
    this.person.friends.forEach((friend: any) => {
      const p = new CustomPerson();
      p.person = friend;
      p.isFriend = true;
      this.customPersons.push(p);
    });
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }

}
