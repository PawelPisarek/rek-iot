import { createAction, props } from '@ngrx/store';
import { Appliance } from './appliance.model';

export const actionAppliancesUpsertOne = createAction(
  '[Appliances] Upsert One',
  props<{ book: Appliance }>()
);

export const actionAppliancesDeleteOne = createAction(
  '[Appliances] Delete One',
  props<{ id: string }>()
);
