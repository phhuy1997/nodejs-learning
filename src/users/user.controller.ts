/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDTO } from 'src/user.dto';
import { UserService, UserServiceA, UserServiceB } from './user.service';
import { ModuleRef } from '@nestjs/core';
import { UserRepository } from './user.repository';

//Decorator @Controller is used to wrap within this module so that Nest will know this is a Controller
@Controller('users') // router: /users
export class UsersController {
  // userService: UserService; //removed
  constructor(
    private readonly userService: UserService, // C1: (userService: UserService) is passed directly from Module's Provider --> already ready to use
    private readonly moduleRef: ModuleRef, // C2: all of providers from Module will be passed into this moduleRef
    @Inject('KEY_B') private readonly userServiceB: UserServiceB // C3: Inject with key directly from here to use (compare to C2, no need declare variable to use like below).
  ) { 
    const userRepository = new UserRepository(); //Create an init userRepository variable (has value)
    this.userService = new UserService(userRepository); // contruct userService with constructor: userRepository --> userRepository in UserService can be valid and not error when touch it
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


  
  @Post('a')
  createUserA(@Body() user: UserDTO) {
    const userServiceA = this.moduleRef.get<UserServiceA>('KEY_A', {strict: false}); // get userServiceA (key_A) from moduleRef above
    if (!userServiceA) {
      throw new Error('UserServiceB is not available in moduleRef');
    }
    return userServiceA.createUser(user);
  }


  @Post('b')
  createUserB(@Body() user: UserDTO) {
    return this.userServiceB.createUser(user);
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
