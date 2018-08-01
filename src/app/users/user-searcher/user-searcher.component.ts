import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-searcher',
  templateUrl: './user-searcher.component.html',
  styleUrls: ['./user-searcher.component.css']
})
export class UserSearcherComponent implements OnInit {

  user: User;
  users: User[] = [];
  text: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: User) => this.user = data);
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.text !== undefined) {
        this.text = params.text;
        this.users = this.userService.searchUsers(params.text);
      }
    });
  }

}
