import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [CheckoutComponent, PaymentComponent, CartComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
