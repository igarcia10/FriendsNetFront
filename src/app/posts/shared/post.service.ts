import { Injectable } from '../../../../node_modules/@angular/core';
import { Post } from './post.model';

@Injectable()
export class PostService {

    post: Post;
    posts: Post[];

    constructor() {}
}
