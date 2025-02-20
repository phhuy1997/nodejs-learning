import { StoreConfig } from './store.config';

export class StoreService {
  constructor(private config?: StoreConfig) {}
  save(data: any): void {
    console.log(`data: ${data}   ||  config: ${this.config?.path}`);
  }
  get(id: number): void {
    console.log('id :>> ', id);
  }
}
