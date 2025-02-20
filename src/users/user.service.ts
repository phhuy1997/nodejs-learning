/* eslint-disable prettier/prettier */
import { UserDTO } from 'src/user.dto';
import { UserRepository } from './user.repository';

export class UserService {
  userRepository: UserRepository; // declare variable userRepository: belongs to class UserRepository --> it WILL BE a database representative
  constructor(userRepository: UserRepository) { // userRepository = new UserRepository(); will be passed from caller (UserController) into this constructor
    this.userRepository = userRepository; // --> Now Our variable: userRepository ALREADY be a database representative  --> We can query data from it
  }

  createUser(user: UserDTO) {
    console.log('user: ', user); // raw input
    // Global Transformer
    const userReal = UserDTO.exposedInput(user);
    console.log('userReal :>> ', userReal); // only accepted input

    // TO DO: userRepository.mutate(INSERT INTO User name = userReal.fullname ...)

    return {
      data: user,
      status: 200,
      message: 'Create successfully',
    };
  }
}
