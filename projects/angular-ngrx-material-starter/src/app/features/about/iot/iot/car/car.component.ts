import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'anms-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  asdasd$: any[] = [];
  aha$: any[] = [];

  constructor(private mockDataService: MockDataService) {
    this.asdasd$ = this.mockDataService.getDevices();
    this.aha$ = this.mockDataService.mcu();
  }

  ngOnInit(): void {}
}
