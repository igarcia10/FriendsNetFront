import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
