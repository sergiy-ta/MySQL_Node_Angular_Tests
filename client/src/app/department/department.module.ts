import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DepartmentComponent } from './pages/department/department.component';
import { SaveDepartmentComponent } from './pages/save-department/save-department.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';



@NgModule({
  declarations: [
    DepartmentComponent,
    SaveDepartmentComponent,
    DepartmentFormComponent,
    DepartmentListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DepartmentComponent,
    SaveDepartmentComponent
  ]
})
export class DepartmentModule { }
