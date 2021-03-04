import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../service/employees.service';

@Component({
  selector: 'app-more-employees',
  templateUrl: './more-employees.component.html',
  styleUrls: ['./more-employees.component.scss']
})
export class MoreEmployeesComponent implements OnInit {
  empID: number;
  empName: string;
  empActive: boolean;
  /* tslint:disable */
  emp_dpID: number;
  /* tslint:enable */

  constructor(
    private route: ActivatedRoute,
    private location: Location,
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

  back(): void {
    this.location.back();
  }

}
