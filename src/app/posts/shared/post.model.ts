import { Person } from '../../users/shared/person.model';
import { Like } from './like.model';

export class Post {

    id: number;
    text: string;
    creationDate: Date;
    type: Type;
    picture: string;
    likes: Like[];
    person: Person;


    constructor() { }

}

enum Type {
    Status,
    Bio
}
