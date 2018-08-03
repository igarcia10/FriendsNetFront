import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Like } from './like.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class LikeService {

    URL_BASE = 'http://localhost:8080/likes';

    constructor(private http: HttpClient) {}

    getLikes(): Observable<Like[]> {
        return this.http.get<Like[]>(this.URL_BASE);
    }

    getLikesByPostId(): Observable<Like[]> {
        return null;
    }
}
