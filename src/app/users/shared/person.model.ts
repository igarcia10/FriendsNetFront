import { Friend } from '../../friends/shared/friend.model';

export class Person {

    id: number;
    name: string;
    surname: string;
    picture: string;
    friends: Friend[];
    bio: string;

    constructor() {}

}
