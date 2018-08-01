import { Component, OnInit } from '@angular/core';
import { User } from '../users/shared/user.model';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../users/shared/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  users: User[] = [];
  text: string;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.text != undefined) {
        this.activatedRoute.params
          .subscribe(params =>{
            this.text = params['text'];
            this.users = this.userService.searchUsers(params['text']);});
      }
    });
  }

}
