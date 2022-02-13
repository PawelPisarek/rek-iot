import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Appliance, ApplianceState } from './appliance.model';
import { Action, createReducer, on } from '@ngrx/store';
import {
  actionAppliancesDeleteOne,
  actionAppliancesUpsertOne
} from './appliances.actions';

export function sortByTitle(a: Appliance, b: Appliance): number {
  return a.title.localeCompare(b.title);
}

export const applianceAdapter: EntityAdapter<Appliance> =
  createEntityAdapter<Appliance>({
    sortComparer: sortByTitle
  });
export const initialState: ApplianceState = applianceAdapter.getInitialState({
  ids: ['123', '1'],
  entities: {
    '123': {
      id: '123',
      title: 'biletomat 2',
      data: [{ id: '123' }, { id: '1' }, { id: '2' }]
    },
    '1': {
      id: '1',
      title: 'komputer pokładowy',
      data: [{ id: '3' }]
    }
  }
});

const reducer = createReducer(
  initialState,
  on(actionAppliancesUpsertOne, (state, { book }) =>
    applianceAdapter.upsertOne(book, state)
  ),
  on(actionAppliancesDeleteOne, (state, { id }) =>
    applianceAdapter.removeOne(id, state)
  )
);

export function applianceReducer(
  state: ApplianceState | undefined,
  action: Action
) {
  return reducer(state, action);
}
