import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './interfaces';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users: User[] = [{
        name: 'Seongil Lee',
        age: 35,
        gender: 'male'
      }];

      jest.spyOn(service, 'findAll').mockImplementation(() => users);

      expect(await controller.findAll({limit: 10, page: 0})).toBe(users);
    });
  });

});
