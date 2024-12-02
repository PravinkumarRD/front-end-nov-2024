import { Component, Input } from '@angular/core';

import { EMPLOYEE_DETAILS_TITLE } from "../../../statics/employee-statics";

import { Employee } from "../../models/employee";

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  pageTitle: string = EMPLOYEE_DETAILS_TITLE;
  @Input() employee:Employee;
}
