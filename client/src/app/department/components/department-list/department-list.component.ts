import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../../interface/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  @Input() departmentList: Department[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
