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
import { UserRepository } from './user.repository';
import { StoreConfig } from 'src/store/store.config';
import { StoreService } from 'src/store/store.service';

//Decorator @Controller is used to wrap within this module so that Nest will know this is a Controller
@Controller('users') // router: /users
export class UsersController {
  userService: UserService;
  userServiceA: UserServiceA;
  userServiceB: UserServiceB;

  constructor(
    @Inject('STORE_SERVICE') private storeService: StoreService, // Inject a useFactory so that factory can be passed directly into this Controller
    // private readonly userService: UserService, // --> removed. Because UserService was now constructed by 2 elements (storeService & userRepository). But we dont want to init UserRepository in Module's Provider
    // private readonly moduleRef: ModuleRef, // --> removed as above
    // @Inject('KEY_B') private readonly userServiceB: UserServiceB, // --> removed as above
    @Inject('CONSTANT_CONFIG') private storeConfig: StoreConfig // Inject a useValue so that value can be passed directly into this Controller
  ) { 
    const userRepository = new UserRepository(); //Create an init userRepository variable (has value)
    this.userService = new UserService(this.storeService, userRepository); // contruct userService with constructor: userRepository & storeSerivce --> userRepository in UserService can be valid and not error when touch it
    this.userServiceB = new UserServiceB(this.storeService, userRepository); // same above
    this.userServiceA = new UserServiceA(this.storeService, userRepository); // same above
    }

  // Method GET
  @Get()
  getAllUsers() {
    return [
      {
        name: 'giang',
        age: 18,
        link: this.storeConfig.path + this.storeConfig.dir
      },
      {
        name: 'huy',
        age: 25,
        link: this.storeConfig.path + this.storeConfig.dir
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
    if (!this.userServiceA) {
      throw new Error('UserServiceB is not available in moduleRef');
    }
    return this.userServiceA.createUser(user);
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
