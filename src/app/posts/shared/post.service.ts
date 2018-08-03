import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { LikeType } from './like-type.enum';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class PostService {

    URL_BASE = 'http://localhost:8080/posts';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.URL_BASE);
    }

    getPostsByPersonId(id: number): Observable<Post[]> {
        const url = `${this.URL_BASE}/person/${id}`;
        return this.http.get<Post[]>(url, httpOptions);
    }

    postPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.URL_BASE, post, httpOptions);
    }

    addLike(postId: number, userId: number, like: LikeType): Observable<Post> {
        const url = `${this.URL_BASE}/${postId}/person/${userId}/like/${like}`;

        return this.http.post<Post>(url, httpOptions);
    }

    removePost(id: number) {
        const url = `${this.URL_BASE}/${id}`;
        this.http.delete(url, httpOptions).subscribe();
    }
}
