/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, Length } from 'class-validator';

export class UserDTO {
  @IsNotEmpty() // required --> @usePipe at Controller or useGlobalPipes at main.ts will connect to this to validate
  userName: string;

  @Length(10, 20) // min 10, max 20 --> @usePipe at Controller or useGlobalPipes at main.ts will connect to this to validate
  password: string;
}
