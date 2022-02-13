import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { DeviceState } from './crud/device.model';
import { deviceReducer } from './crud/devices.reducer';
import { AppState } from '../../../../core/core.state';
import { applianceReducer } from './appliance/appliances.reducer';
import { ApplianceState } from './appliance/appliance.model';

export const FEATURE_NAME = 'iot';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  books: deviceReducer,
  appliance: applianceReducer
};

export interface ExamplesState {
  books: DeviceState;
  appliance: ApplianceState;
}

export interface State extends AppState {
  iot: ExamplesState;
}
