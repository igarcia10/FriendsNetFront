import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';
import { User } from '../../users/shared/user.model';
import { UserService } from '../../users/shared/user.service';
import { Friend } from '../../friends/shared/friend.model';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  user: User;
  users: User[];
  person: Person;
  persons: Person[] = [];
  deletable = false;
  text = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.text = '';
    this.userService.getUserById(1)
      .subscribe((data: User) => {
        this.user = data;
        if (this.user) {
          this.getPersons();
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
    this.users = this.userService.searchUsers(this.text);
    let searchPersons: Person[] = [];
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
