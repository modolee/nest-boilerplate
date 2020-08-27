import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../common/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Query('type') type): string {
    console.log(type);
    return this.userService.getUser();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    console.log(createUserDto);
    return this.userService.create();
  }

}
