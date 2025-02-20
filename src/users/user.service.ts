/* eslint-disable prettier/prettier */
import { UserDTO } from 'src/user.dto';
import { UserRepository } from './user.repository';
import { StoreService } from 'src/store/store.service';
// import { Inject } from '@nestjs/common';
// import { StoreService } from 'src/store/store.service';

export class UserService {
  // userRepository: UserRepository;  // --> removed
  constructor(
    private readonly storeService: StoreService,
    private readonly userRepository: UserRepository,
  ) {
      // this.userRepository = userRepository; // --> removed
  }

  createUser(user: UserDTO) {
    console.log('user: ', user); // raw input
    // Global Transformer
    const userReal = UserDTO.exposedInput(user);
    console.log('userReal :>> ', userReal); // only accepted input

    if(this.userRepository){
      this.userRepository.name = userReal.userName + userReal.id; 
    }
    // TO DO: userRepository.mutate(INSERT INTO User name = userReal.fullname ...)
    this.storeService.save(userReal);
    
    return {
      data: user,
      status: 200,
      message: 'Create successfully',
    };
  }
}

export class UserServiceA extends UserService {  // Example for another Service
}

export class UserServiceB extends UserService {  // Example for another Service
}
