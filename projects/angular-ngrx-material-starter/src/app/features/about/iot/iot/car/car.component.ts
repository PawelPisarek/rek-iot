import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getItemById, selectAllBooks } from '../crud/devices.selectors';
import { Device } from '../crud/device.model';
import { tap } from 'rxjs/operators';
import { State } from '../iot.state';

@Component({
  selector: 'anms-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  asdasd$: any[] = [];
  aha$: any[] = [];

  books$: Observable<Device | undefined> = this.store.pipe(
    select(getItemById('123'))
  );

  constructor(
    private mockDataService: MockDataService,
    private store: Store<State>
  ) {
    this.asdasd$ = this.mockDataService.getDevices();
    this.aha$ = this.mockDataService.mcu();
  }

  ngOnInit(): void {
    this.books$.pipe(tap(console.log)).subscribe();
  }
}
