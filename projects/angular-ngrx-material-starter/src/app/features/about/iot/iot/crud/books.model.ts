import { EntityState } from '@ngrx/entity';

export interface DeviceInfo {
  type: 'danger' | 'warn';
  description: string;
}

export interface Book {
  title: string;
  data: DeviceInfo[];
}

// For extending the BookState Interface, we could always use
// export interface BookState extends EntityState<Book> {}
export type BookState = EntityState<Book>;