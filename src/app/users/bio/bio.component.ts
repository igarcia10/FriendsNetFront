import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../shared/person.model';
import { UserService } from '../shared/person.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  @Input() user: Person;
  editable = false;
  editMode = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  switchEditable() {
    this.editable = !this.editable;
  }

  switchMode() {
    this.editMode = !this.editMode;
  }

  putBio() {
    this.userService.putUser(this.user)
      .subscribe((data: Person) => this.user = data);
    this.switchEditable();
    this.switchMode();
  }

}
