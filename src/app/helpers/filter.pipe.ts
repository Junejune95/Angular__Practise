import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'filterPipe',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], searchData: string): User[] {
    if (!users || !searchData) return users;

    return users.filter(
      (user) => user.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1
    );
  }
}
