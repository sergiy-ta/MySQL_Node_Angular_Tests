import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.scss']
})
export class DeleteDepartmentComponent implements OnInit {
  dpID: number;
  dpName: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getEmployees(+params.dpID);
    });
  }

  private getEmployees(dpID: number): void {
    this.departmentService.get({ dpID }).subscribe(
      res => {
        this.dpID = res.data.dpID;
        this.dpName = res.data.dpName;
      },
      error => console.error(error)
    );
  }

  deleteEmployees(): void {
    this.departmentService.delete({ dpID: this.dpID }).subscribe(
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
