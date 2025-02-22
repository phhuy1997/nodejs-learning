import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';

@Module({
  providers: [
    FacilityService, // provider as injection elements
  ],
  exports: [FacilityService], // export so that it can be imported into other module
})
export class FacilityModule {}
