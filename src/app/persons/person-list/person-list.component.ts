import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Person } from '../shared/person.model';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnChanges, OnInit {

  @Input() user: User;
  @Input() users?: User[];
  persons: Person[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.users = changes.users.currentValue;
  }

  ngOnInit() {
    if (!this.users) {
      this.user.friends.forEach((friend: any) => {
        const p = new Person();
        p.user = friend;
        p.isFriend = true;
        this.persons.push(p); });
    } else {
      this.users.map( (u: User) => {
        const p = new Person();
        p.user = u;
        if (this.user.friends.includes(u)) {
          p.isFriend = true;
        } else {
          p.isFriend = false;
        }
        this.persons.push(p);
      } );
    }
  }

}
