import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CarAlertComponent } from './car-alert/car-alert.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CarsComponent, CarComponent, CarAlertComponent],
  exports: [CarsComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule]
})
export class IotModule {}
