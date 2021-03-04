import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SaveEmployeesComponent } from './pages/save-employees/save-employees.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';



@NgModule({
  declarations: [SaveEmployeesComponent, EmployeesFormComponent, EmployeesComponent, EmployeesListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
