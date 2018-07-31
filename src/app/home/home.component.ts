import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/shared/user.service';
import { User } from '../users/shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  postListEnum: PostListEnum = 1;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: User) => this.user = data);
  }

}
