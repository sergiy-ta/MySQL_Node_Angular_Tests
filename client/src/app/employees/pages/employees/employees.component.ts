import { Component, OnInit } from '@angular/core';
import { Employees } from '../../interface/employees';
import { EmployeesService } from '../../service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeesList: Employees[];

  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  private getEmployeesList(): void {
    this.employeesService.getList().subscribe(
      res => {
        this.employeesList = res.data;
      },
      error => console.error(error)
    );
  }
}
