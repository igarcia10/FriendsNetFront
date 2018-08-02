import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() persons: Person[] = [];
  @Output() select = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  selectPerson(person: Person) {
    this.select.emit(person);
  }

}
