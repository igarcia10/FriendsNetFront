import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

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
