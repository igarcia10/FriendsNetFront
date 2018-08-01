import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';
import { User } from '../../users/shared/user.model';
import { Friend } from '../../friends/shared/friend.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() user: User;
  @Input() users?: User[];
  @Output() select = new EventEmitter<Person>();
  persons: Person[] = [];

  constructor() { }

  ngOnInit() {
    if (!this.users) {
      this.user.friends.forEach((friend: any) => {
        const p = new Person();
        p.user = friend;
        p.isFriend = true;
        this.persons.push(p);
      });
    } else {
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
          this.persons.push(p);
        }
      });
    }
  }

  selectPerson(person: Person) {
    this.select.emit(person);
  }

}
