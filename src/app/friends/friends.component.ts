import { Component, OnInit } from '@angular/core';
import { User } from '../users/shared/user.model';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../users/shared/user.service';
import { Person } from '../persons/shared/person.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  user: User;
  person: Person;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: User) => this.user = data);
  }

  getPerson(person: Person) {
    this.person = person;
  }

}
