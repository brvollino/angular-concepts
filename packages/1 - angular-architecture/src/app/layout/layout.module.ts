import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, SideMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, MenuComponent, SideMenuComponent]
})
export class LayoutModule { }
