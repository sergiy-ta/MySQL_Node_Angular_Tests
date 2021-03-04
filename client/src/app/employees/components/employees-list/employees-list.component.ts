import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Employees } from '../../interface/employees';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit, OnChanges {
  @Input() employeesList: Employees[] = [];
  list: Employees[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.list = this.employeesList;
  }

  filter(info: { text: string }): void {
    this.list = [];
    this.employeesList.forEach((element, index) => {
      if (element.empName.startsWith(info.text)) {
        this.list.push(element);
      }
    });
  }

}
