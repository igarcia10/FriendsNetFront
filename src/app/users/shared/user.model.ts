import { Friend } from '../../friends/shared/friend.model';

export class User {

    id: number;
    name: string;
    surname: string;
    picture: string;
    friends: Friend[];

    constructor() {}

}
