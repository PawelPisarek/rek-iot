import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { BookState } from './crud/books.model';
import { bookReducer } from './crud/books.reducer';
import { AppState } from '../../../../core/core.state';

export const FEATURE_NAME = 'iot';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  books: bookReducer
};

export interface ExamplesState {
  books: BookState;
}

export interface State extends AppState {
  iot: ExamplesState;
}
