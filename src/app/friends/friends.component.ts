import { Component, OnInit } from '@angular/core';
import { User } from '../users/shared/user.model';
import { UserService } from '../users/shared/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: User) => this.user = data);
  }

}
