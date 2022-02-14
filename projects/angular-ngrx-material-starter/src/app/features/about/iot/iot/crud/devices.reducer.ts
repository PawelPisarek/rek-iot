import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Device, DeviceState } from './device.model';
import { actionBooksDeleteOne, actionBooksUpsertOne } from './devices.actions';
import { Action, createReducer, on } from '@ngrx/store';

export function sortByTitle(a: Device, b: Device): number {
  return a.title.localeCompare(b.title);
}

export const deviceAdapter: EntityAdapter<Device> = createEntityAdapter<Device>(
  {
    sortComparer: sortByTitle
  }
);
export const initialState: DeviceState = deviceAdapter.getInitialState({
  ids: ['123', '1', '2', '3'],
  entities: {
    '123': {
      id: '123',
      title: 'drukarka termiczna',
      data: [{ type: 'ok', description: 'niski stan papieru' }]
    },
    '1': {
      id: '1',
      title: 'terminal płatniczy',
      data: []
    },
    '2': {
      id: '2',
      title: 'czytnik kodów QR',
      data: []
    },
    '3': {
      id: '3',
      title: 'cpu',
      data: []
    }
  }
});

const reducer = createReducer(
  initialState,
  on(actionBooksUpsertOne, (state, { book }) =>
    deviceAdapter.upsertOne(book, state)
  ),
  on(actionBooksDeleteOne, (state, { id }) =>
    deviceAdapter.removeOne(id, state)
  )
);

export function deviceReducer(state: DeviceState | undefined, action: Action) {
  return reducer(state, action);
}
