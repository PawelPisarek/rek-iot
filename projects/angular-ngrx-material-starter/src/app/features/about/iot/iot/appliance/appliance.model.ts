import { EntityState } from '@ngrx/entity';
import { Device } from '../crud/device.model';

export interface Appliance {
  title: string;
  data: Device[];
}

// For extending the BookState Interface, we could always use
// export interface BookState extends EntityState<Book> {}
export type ApplianceState = EntityState<Appliance>;
