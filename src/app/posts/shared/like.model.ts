import { Person } from '../../persons/shared/person.model';
import { LikeType } from './like-type.enum';

export class Like {
    type: LikeType;
    person: Person;
}
