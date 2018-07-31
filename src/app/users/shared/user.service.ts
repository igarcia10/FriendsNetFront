import { Injectable } from '../../../../node_modules/@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class UserService {

    URL_BASE = 'http://localhost:3000/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.URL_BASE);
    }

    getUserById(id: number): Observable<User> {
        const url = `${this.URL_BASE}/${id}`;

        return this.http.get<User>(url, httpOptions);
    }

    putUser(user: User): Observable<User> {
        const url = `${this.URL_BASE}/${user.id}`;

        return this.http.put<User>(url, user, httpOptions);
    }
}
