import { Friend } from '../../friends/shared/friend.model';

export class User {
    name: string;
    surname: string;
    picture: string;
    friends: Friend[];

    constructor() {}

}
