import { Injectable } from '../../../../node_modules/@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class UserService {

    URL_BASE = 'http://localhost:3000/users';

    users: User[] = [];

    constructor(private http: HttpClient) { 
        this.getUsers().subscribe((data: User[]) => this.users = data);
    }

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

    searchUsers(text: string): User[] {
        return this.users.filter(item =>
             item.name.toLowerCase().includes(text.toLowerCase())
            || item.surname.toLowerCase().includes(text.toLowerCase()));
    }
}
