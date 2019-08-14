import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CustomerDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomerModule { }
