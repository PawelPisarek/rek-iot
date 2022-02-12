import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { IotModule } from './iot/iot/iot.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, SharedModule, AboutRoutingModule, IotModule]
})
export class AboutModule {}
