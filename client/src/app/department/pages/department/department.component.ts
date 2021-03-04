import { Component, OnInit } from '@angular/core';
import { Department } from '../../interface/department';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departmentList: Department[];

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.getDepartmentList();
  }

  private getDepartmentList(): void {
    this.departmentService.getList().subscribe(
      res => {
        this.departmentList = res.data;
      },
      error => console.error(error)
    );
  }

}
