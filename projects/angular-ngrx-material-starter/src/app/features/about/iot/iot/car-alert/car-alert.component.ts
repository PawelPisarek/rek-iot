import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'anms-car-alert',
  templateUrl: './car-alert.component.html',
  styleUrls: ['./car-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarAlertComponent implements OnInit {
  @HostBinding('class') classNames = 'error';

  constructor() {}

  ngOnInit(): void {}
}
