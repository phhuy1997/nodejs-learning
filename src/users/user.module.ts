import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService, UserServiceA, UserServiceB } from './user.service';
import { StoreConfig } from 'src/store/store.config';
import { StoreService } from 'src/store/store.service';

function createService(config?: StoreConfig): StoreService {
  return new StoreService(config);
}

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
    {
      provide: 'CONSTANT_CONFIG', //key
      useValue: {
        dir: 'NestJs',
        path: '/myPC/Huy/NodeJs/',
      } as StoreConfig,
    },
    {
      provide: 'STORE_SERVICE', //key
      useFactory: createService,
      inject: [
        {
          token: 'CONSTANT_CONFIG',
          optional: true,
        },
      ],
    },
  ],
})
export class UsersModule {}
