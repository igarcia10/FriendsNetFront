import { Injectable } from '../../../../node_modules/@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class PostService {

    URL_BASE = 'http://localhost:3000/posts';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.URL_BASE);
    }

    getPostsByPersonId(id: number): Observable<Post[]> {
        const url = `${this.URL_BASE}/${id}`;
        return this.http.get<Post[]>(url, httpOptions);
    }

    postPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.URL_BASE, post, httpOptions);
    }
}
