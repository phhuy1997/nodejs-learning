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

//Decorator @Controller is used to wrap within this module so that Nest will know this is a Controller
@Controller('users') // router: /users
export class UsersController {
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
    console.log('user: ', user); // raw input
    // C1: Controller transformer
    // const userReal = plainToClass(this, obj, { excludeExtraneousValues: true });  --> remove the fields that not be exposed in UserDTO

    // C2: Global Transformer
    const userReal = UserDTO.exposedInput(user);

    console.log('userReal :>> ', userReal); // only accepted input
    return {
      data: user,
      status: 200,
      message: 'Create successfully',
    };
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
