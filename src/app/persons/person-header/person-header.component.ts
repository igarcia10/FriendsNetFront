import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-person-header',
  templateUrl: './person-header.component.html',
  styleUrls: ['./person-header.component.css']
})
export class PersonHeaderComponent implements OnInit {

  person: Person;

  constructor(private userService: PersonService) {
  }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: Person) => this.person = data);
  }

}
