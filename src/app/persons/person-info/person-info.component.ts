import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  @Input() person: Person;
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

}
