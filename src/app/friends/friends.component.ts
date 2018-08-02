import { Component, OnInit } from '@angular/core';
import { User } from '../users/shared/user.model';
import { UserService } from '../users/shared/user.service';
import { Person } from '../persons/shared/person.model';
import { Friend } from './shared/friend.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  user: User;
  users: User[];
  person: Person;
  persons: Person[] = [];
  deletable = false;
  text = '';

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.text = '';
    this.userService.getUserById(1)
      .subscribe((data: User) => {
        this.user = data;
        if (this.user) {
          this.getPersons();
          this.activatedRoute.params.subscribe((params: any) => {
            if (params.text !== undefined) {
              this.text = params.text;
              this.users = this.userService.searchUsers(params.text);
              this.searchUser();
            }
          });
        }
      });
  }

  unfriend() {
  }

  add() {
  }

  switchDeletable() {
    this.deletable = !this.deletable;
  }

  getPerson(person: Person) {
    this.person = person;
  }

  getPersons() {
    if (this.user) {
      this.user.friends.forEach((friend: any) => {
        const p = new Person();
        p.user = friend;
        p.isFriend = true;
        this.persons.push(p);
      });
    }
  }

  searchUser() {
    if (this.text.length > 0) {
      this.users = this.userService.searchUsers(this.text);
      const searchPersons: Person[] = [];
      this.users.map((u: User) => {
        if (u.id !== this.user.id) {
          const p = new Person();
          p.user = u;
          let friends = false;
          u.friends.forEach((friend: Friend) => {
            if (friend.id === this.user.id) {
              friends = true;
            }
          });
          p.isFriend = friends;
          searchPersons.push(p);
        }
      });
      this.persons = searchPersons;
    }
  }

}
