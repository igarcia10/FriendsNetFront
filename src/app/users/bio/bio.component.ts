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
    this.user.bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a sunt magni minima dolorum. Magnam at adipisci dolorem alias doloribus autem deleniti fuga. Sit, tempore accusantium nulla rerum maxime aut.";
  }

}
