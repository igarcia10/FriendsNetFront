import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomPerson } from '../shared/person.model';
import { Person } from '../../users/shared/user.model';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: CustomPerson;
  @Output() select = new EventEmitter<CustomPerson>();
  @Output() addUser = new EventEmitter<Person[]>();
  @Output() unfriend = new EventEmitter<Person>();
  deletable = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  unfriendPerson() {
    this.unfriend.emit(this.person.user);
  }

  addPerson() {
    const friends: Person[] = [];
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
