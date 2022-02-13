import { createAction, props } from '@ngrx/store';
import { Device } from './device.model';

export const actionBooksUpsertOne = createAction(
  '[Books] Upsert One',
  props<{ book: Device }>()
);

export const actionBooksDeleteOne = createAction(
  '[Books] Delete One',
  props<{ id: string }>()
);
