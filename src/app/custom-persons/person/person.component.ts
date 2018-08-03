import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomPerson } from '../shared/custom-person.model';
import { Person } from '../../persons/shared/person.model';
import { PersonService } from '../../persons/shared/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() customPerson: CustomPerson;
  @Output() select = new EventEmitter<CustomPerson>();
  @Output() add = new EventEmitter<Person[]>();
  @Output() unfriend = new EventEmitter<Person>();
  deletable = false;

  constructor(private userService: PersonService) { }

  ngOnInit() {
  }

  unfriendPerson() {
    this.unfriend.emit(this.customPerson.person);
  }

  addPerson() {
    const friends: Person[] = [];
    friends.push(this.customPerson.person);
    this.add.emit(friends);
  }

  switchDeletable() {
    this.deletable = !this.deletable;
  }

  selectPerson() {
    this.select.emit(this.customPerson);
  }

}
