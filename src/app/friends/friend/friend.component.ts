import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../users/shared/user.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  @Input() user: User;
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
