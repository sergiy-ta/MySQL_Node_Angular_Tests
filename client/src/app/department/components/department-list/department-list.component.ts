import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../interface/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit, OnChanges {
  @Input() departmentList: Department[] = [];
  list: Department[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.list = this.departmentList;
  }

  ngOnChanges(): void {
    this.list = this.departmentList;
  }

  filter(info: { text: string }): void {
    this.list = [];
    this.departmentList.forEach((element, index) => {
      if (element.dpName.startsWith(info.text)) {
        this.list.push(element);
      }
    });
  }

  create(): void {
    this.router.navigate(['department/save']);
  }

}
