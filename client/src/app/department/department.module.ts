import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { DepartmentComponent } from './pages/department/department.component';
import { SaveDepartmentComponent } from './pages/save-department/save-department.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EditDepartmentComponent } from './pages/edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './pages/delete-department/delete-department.component';



@NgModule({
  declarations: [
    DepartmentComponent,
    SaveDepartmentComponent,
    DepartmentFormComponent,
    DepartmentListComponent,
    EditDepartmentComponent,
    DeleteDepartmentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    DepartmentComponent,
    SaveDepartmentComponent
  ]
})
export class DepartmentModule { }
