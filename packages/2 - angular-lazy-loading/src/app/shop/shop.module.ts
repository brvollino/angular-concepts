import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [CheckoutComponent, PaymentComponent],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
