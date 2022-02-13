import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { DeviceState } from './crud/device.model';
import { deviceReducer } from './crud/devices.reducer';
import { AppState } from '../../../../core/core.state';

export const FEATURE_NAME = 'iot';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  books: deviceReducer
};

export interface ExamplesState {
  books: DeviceState;
}

export interface State extends AppState {
  iot: ExamplesState;
}
