import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Output() select = new EventEmitter<Person>();
  deletable = false;

  constructor() { }

  ngOnInit() {
  }

  unfriend() {
  }

  add() {
  }

  switchDeletable() {
    this.deletable = !this.deletable;
  }

  selectPerson() {
    this.select.emit(this.person);
  }

}
