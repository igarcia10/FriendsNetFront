import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) { }

  searchUser(text: string) {
    if (text.length > 0) {
      this.router.navigate(['/friends', text]);
    }
  }
}
