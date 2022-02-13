import { createSelector } from '@ngrx/store';

// import { selectRouterState } from '../../../core/core.module';
// import { selectExamples, ExamplesState } from '../examples.state';

import { deviceAdapter } from './devices.reducer';
import { ExamplesState, selectExamples } from '../iot.state';

const { selectEntities, selectAll } = deviceAdapter.getSelectors();

export const selectBooks = createSelector(
  selectExamples,
  (state: ExamplesState) => state.books
);

export const selectAllBooks = createSelector(selectBooks, selectAll);
export const selectBooksEntities = createSelector(selectBooks, selectEntities);

// export const selectSelectedBook = createSelector(
//   selectBooksEntities,
//   (entities, params) => params && entities[params.state.params.id]
// );
export const getItemById = (id: string) =>
  createSelector(selectBooksEntities, (items) => items[id]);
