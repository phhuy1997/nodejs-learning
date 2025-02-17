/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Expose } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDTO } from './common/base.dto';

export class UserDTO extends BaseDTO {
  @IsNotEmpty() // required --> @usePipe at Controller or useGlobalPipes at main.ts will connect to this to validate
  @Expose()
  userName: string;

  @Length(10, 20) // min 10, max 20 --> @usePipe at Controller or useGlobalPipes at main.ts will connect to this to validate
  @Expose()
  password: string;
}
