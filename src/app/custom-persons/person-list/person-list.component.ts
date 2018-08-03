import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomPerson } from '../shared/custom-person.model';
import { Person } from '../../persons/shared/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() customPersons: CustomPerson[] = [];
  @Output() select = new EventEmitter<CustomPerson>();
  @Output() add = new EventEmitter<Person[]>();
  @Output() unfriend = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  selectPerson(customPerson: CustomPerson) {
    this.select.emit(customPerson);
  }

  addUser(person: Person[]) {
    this.add.emit(person);
  }

  unfriendUser(person: Person) {
    this.unfriend.emit(person);
  }

}
