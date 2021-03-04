import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../service/employees.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.scss']
})
export class EditEmployeesComponent implements OnInit {
  empID: number;
  empName: string;
  empActive: boolean;
  /* tslint:disable */
  emp_dpID: number;
  /* tslint:enable */

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.get(+params.empID);
    });
  }


  private get(empID: number): void {
    this.employeesService.get({ empID }).subscribe(
      res => {
        this.empID = res.data.empID;
        this.empName = res.data.empName;
        this.empActive = res.data.empActive;
        this.emp_dpID = res.data.emp_dpID;
      }
    );
  }

  edit(info: { empName: string, empActive: boolean, emp_dpID: number }): void {
    this.employeesService.edit({ empID: this.empID, empName: info.empName, empActive: info.empActive, emp_dpID: info.emp_dpID }).subscribe(
      res => {
        if (res.data) {
          alert('Оновленно успішно');
        }
      },
      error => console.error(error)
    );
  }

}
