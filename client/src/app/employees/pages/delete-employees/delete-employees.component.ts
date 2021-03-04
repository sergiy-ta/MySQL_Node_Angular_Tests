import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../service/employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-employees',
  templateUrl: './delete-employees.component.html',
  styleUrls: ['./delete-employees.component.scss']
})
export class DeleteEmployeesComponent implements OnInit {
  empID: number;
  empName: string;
  empActive: boolean;
  /* tslint:disable */
  emp_dpID: number;
  /* tslint:enable */

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getEmployees(+params.empID);
    });
  }

  private getEmployees(empID: number): void {
    this.employeesService.get({ empID }).subscribe(
      res => {
        this.empID = res.data.empID;
        this.empName = res.data.empName;
        this.empActive = res.data.empActive;
        this.emp_dpID = res.data.emp_dpID;
      },
      error => console.error(error)
    );
  }

  deleteEmployees(): void {
    this.employeesService.delete({ empID: this.empID }).subscribe(
      res => {
        if (res.data) {
          this.cancelEmployees();
        }
      },
      error => console.error(error)
    );
  }

  cancelEmployees(): void {
    this.location.back();
  }

}
