import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';
import { User } from '../../users/shared/user.model';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Output() select = new EventEmitter<Person>();
  @Output() addUser = new EventEmitter<User[]>();
  deletable = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  unfriend() {
  }

  addPerson() {
    const friends: User[] = [];
    friends.push(this.person.user);
    this.addUser.emit(friends);
  }

  switchDeletable() {
    this.deletable = !this.deletable;
  }

  selectPerson() {
    this.select.emit(this.person);
  }

}
