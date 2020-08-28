import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, ListAllEntities } from './dto';
import { User } from './interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id: string, updateUserDto: UpdateUserDto): string {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} user`;
  }

}
