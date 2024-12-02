import { Component } from '@angular/core';

import { Employee } from "../../models/employee";

import { EMPLOYEES_LIST_TITLE, EMPLOYEES_LIST_SUB_TITLE, TABLE_COLUMNS } from "../../../statics/employee-statics";


@Component({
  selector: 'bajaj-employees-list',
  standalone:false,
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss'
})
export class EmployeesListComponent {
  pageTitle: string = EMPLOYEES_LIST_TITLE;
  pageSubTitle: string = EMPLOYEES_LIST_SUB_TITLE;
  columns: string[] = TABLE_COLUMNS;
  employees: Employee[] = [
    {
      employeeId: 2370,
      employeeName: "Pravinkumar R. D.",
      address: "Suncity, A8/404",
      city: "Pune",
      zipcode: 411051,
      phone: "+91 23892893",
      email: "pravin.r.d@synechron.com",
      skillSets: "Microsoft/JavaScript",
      country: "India",
      joiningDate: new Date(),
      avatar: "images/noimage.png"
    },
    {
      employeeId: 2372,
      employeeName: "Manish Kaushik",
      address: "Mooncity, Z8/404",
      city: "Raipur",
      zipcode: 459899,
      phone: "+91 9039039090",
      email: "manish.kaushik@synechron.com",
      skillSets: "DBA",
      country: "India",
      joiningDate: new Date(),
      avatar: "images/noimage.png"
    },
    {
      employeeId: 2374,
      employeeName: "Alisha C.",
      address: "Mooncity, B8/404",
      city: "Mumbai",
      zipcode: 510512,
      phone: "+91 30003000",
      email: "alisha.c@synechron.com",
      skillSets: "Java",
      country: "India",
      joiningDate: new Date(),
      avatar: "images/noimage.png"
    }
  ];
  selectedEmployee!: Employee;
  onEmployeeSelection(employee: Employee): void {
    this.selectedEmployee = employee;
  }

}
