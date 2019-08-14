import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegistersComponent } from './registers/registers.component';
import { LogsComponent } from './logs/logs.component';


@NgModule({
  declarations: [AdminComponent, RegistersComponent, LogsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
