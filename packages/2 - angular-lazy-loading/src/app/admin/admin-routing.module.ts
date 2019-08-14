import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LogsComponent } from './logs/logs.component';
import { RegistersComponent } from './registers/registers.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'registers'
      },
      {
        path: 'registers',
        component: RegistersComponent
      },
      {
        path: 'logs',
        component: LogsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
