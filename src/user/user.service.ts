import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'Hello User';
  }

  create(): string {
    return 'Created new user'
  }
}