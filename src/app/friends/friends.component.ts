import { Component, OnInit } from '@angular/core';
import { Person } from '../users/shared/user.model';
import { UserService } from '../users/shared/user.service';
import { CustomPerson } from '../persons/shared/person.model';
import { Friend } from './shared/friend.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  user: Person;
  users: Person[];
  person: CustomPerson;
  persons: CustomPerson[] = [];
  deletable = false;
  text = '';

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.text = '';
    this.userService.getUserById(1)
      .subscribe((data: Person) => {
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

  unfriend(user: Person) {
    this.user.friends.splice(this.user.friends.indexOf(user), 1);
  }

  add(users: Person[]) {
    this.userService.relate(this.user.id, users)
      .subscribe((data: Person) => this.user = data);
  }

  switchDeletable() {
    this.deletable = !this.deletable;
  }

  getPerson(person: CustomPerson) {
    this.person = person;
  }

  getPersons() {
    if (this.user) {
      this.user.friends.forEach((friend: any) => {
        const p = new CustomPerson();
        p.user = friend;
        p.isFriend = true;
        this.persons.push(p);
      });
    }
  }

  searchUser() {
    if (this.text.length > 0) {
      this.users = this.userService.searchUsers(this.text);
      const searchPersons: CustomPerson[] = [];
      this.users.map((u: Person) => {
        if (u.id !== this.user.id) {
          const p = new CustomPerson();
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
