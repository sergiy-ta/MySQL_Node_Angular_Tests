import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../../interface/employees';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  @Input() employeesList: Employees[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
