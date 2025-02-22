export class FacilityService {
  constructor() {}
  saveFacility(data: any): void {
    console.log(`data: ${data} `);
  }
  getFacility(id: number): void {
    console.log('id :>> ', id);
  }
}
