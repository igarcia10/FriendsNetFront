import { Injectable } from '../../../../node_modules/@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {

    user: User;
    users: User[];

    constructor() {}
}
