import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() persons: Person[] = [];
  @Output() select = new EventEmitter<Person>();
  @Output() add = new EventEmitter<User[]>();
  @Output() unfriend = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  selectPerson(person: Person) {
    this.select.emit(person);
  }

  addUser(user: User[]) {
    this.add.emit(user);
  }

  unfriendUser(user: User) {
    this.unfriend.emit(user);
  }

}
