import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';



@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeesListComponent
  ]
})
export class EmployeesModule { }
