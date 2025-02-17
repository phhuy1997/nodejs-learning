import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';

//Decorator @Module is used to wrap within this module so that we can have an instance of this App Module
@Module({
  imports: [UsersModule],
})
export class AppModule {}
