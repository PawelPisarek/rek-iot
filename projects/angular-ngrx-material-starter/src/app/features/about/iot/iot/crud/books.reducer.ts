import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Book, BookState } from './books.model';
import { actionBooksDeleteOne, actionBooksUpsertOne } from './books.actions';
import { Action, createReducer, on } from '@ngrx/store';

export function sortByTitle(a: Book, b: Book): number {
  return a.title.localeCompare(b.title);
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  sortComparer: sortByTitle
});
export const initialState: BookState = bookAdapter.getInitialState({
  ids: ['123', '1', '2', '3'],
  entities: {
    '123': {
      id: '123',
      title: 'drukarka termiczna',
      data: [{ type: 'warn', description: 'niski stan papieru' }]
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
    bookAdapter.upsertOne(book, state)
  ),
  on(actionBooksDeleteOne, (state, { id }) => bookAdapter.removeOne(id, state))
);

export function bookReducer(state: BookState | undefined, action: Action) {
  return reducer(state, action);
}
