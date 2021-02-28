import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SaveDepartmentComponent } from './pages/save-department/save-department.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';



@NgModule({
  declarations: [
    SaveDepartmentComponent,
    DepartmentFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SaveDepartmentComponent
  ]
})
export class DepartmentModule { }
