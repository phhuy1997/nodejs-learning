/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Expose, plainToClass, Transform } from 'class-transformer';

export abstract class BaseDTO {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updateAt: Date;

  firstName: string; //without Exposed --> firstName won't be in result of realInput

  lastName: string; //without Exposed --> lastName won't be in result of realInput

  @Expose()
  @Transform(({ obj }) => obj.firstName + obj.lastName) // but with this @Transform, fullName also can be handle logic and returned in result of realInput
  fullName: string;

  static exposedInput<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
