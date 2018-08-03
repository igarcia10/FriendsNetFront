import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/shared/person.model';
import { PersonService } from '../persons/shared/person.service';
import { CustomPerson } from '../custom-persons/shared/custom-person.model';
import { Friend } from './shared/friend.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  person: Person;
  persons: Person[];
  customPerson: CustomPerson;
  customPersons: CustomPerson[] = [];
  deletable = false;
  text = '';

  constructor(private personService: PersonService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.text = '';
    this.personService.getUserById(1)
      .subscribe((data: Person) => {
        this.person = data;
        if (this.person) {
          this.getPersons();
          this.activatedRoute.params.subscribe((params: any) => {
            if (params.text !== undefined) {
              this.text = params.text;
              this.persons = this.personService.searchUsers(params.text);
              this.searchUser();
            }
          });
        }
      });
  }

  unfriend(person: Person) {
    this.person.friends.splice(this.person.friends.indexOf(person), 1);
  }

  add(persons: Person[]) {
    this.personService.relate(this.person.id, persons)
      .subscribe((data: Person) => this.person = data);
  }

  switchDeletable() {
    this.deletable = !this.deletable;
  }

  getPerson(customPerson: CustomPerson) {
    this.customPerson = customPerson;
  }

  getPersons() {
    if (this.person) {
      this.person.friends.forEach((friend: any) => {
        const p = new CustomPerson();
        p.person = friend;
        p.isFriend = true;
        this.customPersons.push(p);
      });
    }
  }

  searchUser() {
    if (this.text.length > 0) {
      this.persons = this.personService.searchUsers(this.text);
      const searchPersons: CustomPerson[] = [];
      this.persons.map((u: Person) => {
        if (u.id !== this.person.id) {
          const p = new CustomPerson();
          p.person = u;
          let friends = false;
          u.friends.forEach((friend: Friend) => {
            if (friend.id === this.person.id) {
              friends = true;
            }
          });
          p.isFriend = friends;
          searchPersons.push(p);
        }
      });
      this.customPersons = searchPersons;
    }
  }

}
