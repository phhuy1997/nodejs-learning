import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';

//Decorator @Module is used to wrap within this module so that we can have an instance of this App Module
@Module({
  controllers: [UsersController],
})
export class UsersModule {}
