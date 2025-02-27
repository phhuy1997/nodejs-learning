import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityConfig } from './facility.config';

@Module({
  providers: [
    FacilityService, // provider as injection elements
    {
      provide: 'FACILITY_CONFIG',
      useValue: {
        dirName: 'src/history',
        fileName: 'facility.json',
      } as FacilityConfig,
    },
  ],
  exports: [FacilityService], // export so that it can be imported into other module
})
export class FacilityModule {}
