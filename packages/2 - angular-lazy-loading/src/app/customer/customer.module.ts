import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit/credit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [CreditComponent, UserListComponent, UserDetailComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
