import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { SaveEmployeesComponent } from './pages/save-employees/save-employees.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EditEmployeesComponent } from './pages/edit-employees/edit-employees.component';
import { DeleteEmployeesComponent } from './pages/delete-employees/delete-employees.component';
import { MoreEmployeesComponent } from './pages/more-employees/more-employees.component';



@NgModule({
  declarations: [
    SaveEmployeesComponent,
    EmployeesFormComponent,
    EmployeesComponent,
    EmployeesListComponent,
    EditEmployeesComponent,
    DeleteEmployeesComponent,
    MoreEmployeesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    EmployeesComponent
  ]
})
export class EmployeesModule { }
