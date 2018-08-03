import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class PersonService {

    URL_BASE = 'http://localhost:8080/persons';

    persons: Person[] = [];

    constructor(private http: HttpClient) {
        this.getUsers().subscribe((data: Person[]) => this.persons = data);
    }

    getUsers(): Observable<Person[]> {
        return this.http.get<Person[]>(this.URL_BASE);
    }

    getUserById(id: number): Observable<Person> {
        const url = `${this.URL_BASE}/${id}`;

        return this.http.get<Person>(url, httpOptions);
    }

    putUser(user: Person): Observable<Person> {
        const url = `${this.URL_BASE}/${user.id}`;

        return this.http.post<Person>(url, user, httpOptions);
    }

    searchUsers(text: string): Person[] {
        return this.persons.filter(item =>
             item.name.toLowerCase().includes(text.toLowerCase())
            || item.surname.toLowerCase().includes(text.toLowerCase()));
    }

    relate(id: number, friends: Person[]): Observable<Person> {
        const url = `${this.URL_BASE}/${id}/relate`;

        return this.http.post<Person>(url, friends, httpOptions);
    }
}
