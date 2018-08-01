import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/person.model';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() user: User;
  @Input() users?: User[];
  persons: Person[];

  constructor() { }

  ngOnInit() {
  }

}
