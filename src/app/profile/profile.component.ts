import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/shared/user.service';
import { User } from '../users/shared/user.model';
import { Person } from '../persons/shared/person.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  persons: Person[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: User) => this.user = data);
  }

}
