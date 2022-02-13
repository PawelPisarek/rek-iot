import { createSelector } from '@ngrx/store';

// import { selectRouterState } from '../../../core/core.module';
// import { selectExamples, ExamplesState } from '../examples.state';

import { applianceAdapter } from './appliances.reducer';
import { ExamplesState, selectExamples } from '../iot.state';

const { selectEntities, selectAll } = applianceAdapter.getSelectors();

export const selectAppliances = createSelector(
  selectExamples,
  (state: ExamplesState) => state.appliance
);

export const selectAllAppliances = createSelector(selectAppliances, selectAll);
export const selectBooksEntities = createSelector(
  selectAppliances,
  selectEntities
);

// export const selectSelectedBook = createSelector(
//   selectBooksEntities,
//   (entities, params) => params && entities[params.state.params.id]
// );
export const getItemById = (id: string) =>
  createSelector(selectBooksEntities, (items) => items[id]);
