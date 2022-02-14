import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { DeviceInfo } from '../crud/device.model';

@Component({
  selector: '[data]anms-car-alert',
  templateUrl: './car-alert.component.html',
  styleUrls: ['./car-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarAlertComponent implements OnChanges {
  @HostBinding('class') classNames = '';
  @Input() data: DeviceInfo | undefined | null;

  ngOnChanges(changes: SimpleChanges): void {
    this.classNames = this.data?.type || '';
  }
}
