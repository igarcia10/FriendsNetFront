import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  deletable = false;

  constructor() { }

  ngOnInit() {
  }

  unfriend() {

  }

  switchDeletable() {
    this.deletable = !this.deletable;
  }

}
