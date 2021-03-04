import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SaveEmployeesComponent } from './pages/save-employees/save-employees.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';



@NgModule({
  declarations: [SaveEmployeesComponent, EmployeesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
