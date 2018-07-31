import { User } from '../../users/shared/user.model';

export class Post {

    text: string;
    creationDate: Date;
    type: Type;
    picture: string;
    likes: any[];
    user: User;


    constructor() { }

}

enum Type {
    Status,
    Bio
}
