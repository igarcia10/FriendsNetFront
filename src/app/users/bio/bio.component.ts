import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  @Input() user: User;
  editable = false;
  editMode = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user.bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a sunt magni minima dolorum. Magnam at adipisci dolorem alias doloribus autem deleniti fuga. Sit, tempore accusantium nulla rerum maxime aut.";
  }

  switchEditable() {
    this.editable = !this.editable;
  }

  switchMode() {
    this.editMode = !this.editMode;
  }

  putBio() {
    this.userService.putUser(this.user)
      .subscribe((data: User) => this.user = data);
    this.switchEditable();
    this.switchMode();
  }

}
