import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Device } from '../crud/device.model';
import { select, Store } from '@ngrx/store';
import { selectAllAppliances } from '../appliance/appliances.selectors';
import { map, mergeMap } from 'rxjs/operators';
import { getItemById } from '../crud/devices.selectors';
import { State } from '../iot.state';

interface DeviceAlerts {
  danger: Device | undefined | null;
}

@Component({
  selector: 'anms-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent implements OnInit {
  applianceAlert$: Observable<DeviceAlerts> = this.store.pipe(
    select(selectAllAppliances),
    mergeMap((appliances) =>
      combineLatest(
        appliances.reduce(
          (acc: Observable<Device | undefined | null>[], devices) => {
            const devices$: Observable<Device | undefined>[] = devices.data.map(
              (device) => this.store.pipe(select(getItemById(device.id)))
            );

            return acc.concat(devices$);
          },
          []
        )
      )
    ),
    map((appliance) =>
      appliance.reduce(
        (acc: DeviceAlerts, device: Device | undefined | null) => {
          if (!!device?.data.length) {
            return { ...acc, danger: device };
          }
          return acc;
        },
        { danger: null }
      )
    )
  );

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
