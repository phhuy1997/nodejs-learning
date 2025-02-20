/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDTO } from 'src/user.dto';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

//Decorator @Controller is used to wrap within this module so that Nest will know this is a Controller
@Controller('users') // router: /users
export class UsersController {
  userService: UserService; // declare variable userService: belongs to class UserService

  constructor() {
    const userRepository = new UserRepository(); //Create an init userRepository variable (has value)
    this.userService = new UserService(userRepository); //inject UserRepository into UserService  --> UserService have enough ability to be init by constructor, and can use all available method in UserServices (.CreateUser)
  }

  // Method GET
  @Get()
  getAllUsers() {
    return [
      {
        name: 'giang',
        age: 18,
      },
      {
        name: 'huy',
        age: 25,
      },
    ];
  }

  // Method POST, @UsePipes for auto validation and response to Client if any fail
  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDTO) {
    // Moved logic to UserService
    // --> return below
    return this.userService.createUser(user);
  }

  //Method GET by Id (in path)
  @Get(':id')
  GetUserById(@Param('id') id: number) {
    //TO DO: SELECT User FROM DB WHERE Id = :id
    //...
    return {
      id: id,
      name: 'Huy',
      age: 25,
      email: 'phhuy1997@gmail.com',
    };
  }
}
