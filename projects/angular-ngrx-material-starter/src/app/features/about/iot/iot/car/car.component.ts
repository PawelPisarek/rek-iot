import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getItemById } from '../crud/devices.selectors';
import { Device } from '../crud/device.model';
import { map } from 'rxjs/operators';
import { State } from '../iot.state';
import { selectAllAppliances } from '../appliance/appliances.selectors';

@Component({
  selector: 'anms-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  appliances$: Observable<
    { title: string; data: Observable<Device | undefined>[] }[]
  > = this.store.pipe(
    select(selectAllAppliances),
    map((appliances) =>
      appliances.map((devices) => ({
        title: devices.title,
        data: devices.data.map((device) =>
          this.store.pipe(select(getItemById(device.id)))
        )
      }))
    )
  );

  constructor(
    private mockDataService: MockDataService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {}
}
