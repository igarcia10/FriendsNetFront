import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  user: Person;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: Person) => this.user = data);
  }

}
