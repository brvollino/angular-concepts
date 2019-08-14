import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipe } from './pipes/example.pipe';
import { ExampleDirective } from './directive/example.directive';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [ExamplePipe, ExampleDirective, CustomerListComponent, TableComponent, CardComponent, SectionComponent],
  imports: [
    CommonModule
  ],
  exports: [ExamplePipe, ExampleDirective]

})
export class SharedModule { }
