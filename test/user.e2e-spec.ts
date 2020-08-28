import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../src/user/user.module';
import { UserService } from '../src/user/user.service';
import { INestApplication } from '@nestjs/common';

describe('User', () => {
  let app: INestApplication;
  const userService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(UserService)
      .useValue(userService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/user GET', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect(userService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
