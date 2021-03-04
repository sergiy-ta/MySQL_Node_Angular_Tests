import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/department/interface/department';
import { DepartmentService } from 'src/app/department/services/department.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input() empName: string;
  @Input() empActive: boolean;
  /* tslint:disable */
  @Input() emp_dpID: number;
  /* tslint:enable */

  @Output() send = new EventEmitter<{ empName: string, empActive: boolean, emp_dpID: number }>();

  departmentList: Department[];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      empName: [null, [Validators.required]],
      empActive: [null, [Validators.required]],
      emp_dpID: [null, [Validators.required]]
    });

    this.getDepartmentList();
  }

  ngOnChanges(): void {
    this.form = this.formBuilder.group({
      empName: [this.empName, [Validators.required]],
      empActive: [this.empActive, [Validators.required]],
      emp_dpID: [this.emp_dpID, [Validators.required]]
    });
  }

  sendForm(info: { empName: string, empActive: boolean, emp_dpID: string }): void {
    this.send.emit({ empName: info.empName, empActive: info.empActive, emp_dpID: +info.emp_dpID});
  }

  private getDepartmentList(): void {
    this.departmentService.getList().subscribe(
      res => {
        this.departmentList = res.data;
      },
      error => console.error(error)
    );
  }

  back(): void {
    this.location.back();
  }

}
