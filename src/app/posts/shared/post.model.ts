import { User } from '../../users/shared/user.model';
import { Like } from './like.model';

export class Post {

    id: number;
    text: string;
    creationDate: Date;
    type: Type;
    picture: string;
    likes: Like[];
    user: User;


    constructor() { }

}

enum Type {
    Status,
    Bio
}
