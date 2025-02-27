import { Inject } from '@nestjs/common';
import { FacilityConfig } from './facility.config';
import * as fs from 'fs';
export class FacilityService {
  constructor(
    @Inject('FACILITY_CONFIG') private readonly facilityConfig: FacilityConfig,
  ) {
    if (!fs.existsSync(this.facilityConfig.dirName)) {
      fs.mkdirSync(this.facilityConfig.dirName);
    }
  }
  saveFacility(data: any): void {
    console.log(`data: ${data} `);
  }
  getFacility(id: number): void {
    console.log('id :>> ', id);
  }
  createHistory(data: any) {
    fs.appendFileSync(
      `${this.facilityConfig.dirName}/${this.facilityConfig.fileName}`,
      JSON.stringify(data),
    );
  }
}
