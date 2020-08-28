import { Injectable } from '@nestjs/common';
import { User } from './interfaces';

@Injectable()
export class UserService {
  private readonly users: User[] = [{
    name: '이성일',
    age: 35,
    gender: 'male'
  }];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }
}