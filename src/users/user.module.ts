import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService, UserServiceA, UserServiceB } from './user.service';

//Decorator @Module is used to wrap within this module so that we can have an instance of this App Module
@Module({
  controllers: [UsersController],
  // Gather all Service into here --> In Controller, it will always be ready to used without injection seperately
  providers: [
    UserService, // C1: without key
    // C2: with key
    {
      provide: 'KEY_A', //key
      useClass: UserServiceA,
    },
    {
      provide: 'KEY_B', //key
      useClass: UserServiceB,
    },
  ],
})
export class UsersModule {}
