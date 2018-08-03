import { Component, OnInit } from '@angular/core';
import { Person } from '../users/shared/person.model';
import { UserService } from '../users/shared/person.service';
import { CustomPerson } from '../persons/shared/custom-person.model';
import { Friend } from './shared/friend.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  person: Person;
  persons: Person[];
  customPerson: CustomPerson;
  customPersons: CustomPerson[] = [];
  deletable = false;
  text = '';

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.text = '';
    this.userService.getUserById(1)
      .subscribe((data: Person) => {
        this.person = data;
        if (this.person) {
          this.getPersons();
          this.activatedRoute.params.subscribe((params: any) => {
            if (params.text !== undefined) {
              this.text = params.text;
              this.persons = this.userService.searchUsers(params.text);
              this.searchUser();
            }
          });
        }
      });
  }

  unfriend(user: Person) {
    this.person.friends.splice(this.person.friends.indexOf(user), 1);
  }

  add(users: Person[]) {
    this.userService.relate(this.person.id, users)
      .subscribe((data: Person) => this.person = data);
  }

  switchDeletable() {
    this.deletable = !this.deletable;
  }

  getPerson(person: CustomPerson) {
    this.customPerson = person;
  }

  getPersons() {
    if (this.person) {
      this.person.friends.forEach((friend: any) => {
        const p = new CustomPerson();
        p.person = friend;
        p.isFriend = true;
        this.customPersons.push(p);
      });
    }
  }

  searchUser() {
    if (this.text.length > 0) {
      this.persons = this.userService.searchUsers(this.text);
      const searchPersons: CustomPerson[] = [];
      this.persons.map((u: Person) => {
        if (u.id !== this.person.id) {
          const p = new CustomPerson();
          p.person = u;
          let friends = false;
          u.friends.forEach((friend: Friend) => {
            if (friend.id === this.person.id) {
              friends = true;
            }
          });
          p.isFriend = friends;
          searchPersons.push(p);
        }
      });
      this.customPersons = searchPersons;
    }
  }

}
