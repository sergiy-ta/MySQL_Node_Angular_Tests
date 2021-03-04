import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/pages/department/department.component';
import { SaveDepartmentComponent } from './department/pages/save-department/save-department.component';
import { DeleteEmployeesComponent } from './employees/pages/delete-employees/delete-employees.component';
import { EditEmployeesComponent } from './employees/pages/edit-employees/edit-employees.component';
import { EmployeesComponent } from './employees/pages/employees/employees.component';
import { SaveEmployeesComponent } from './employees/pages/save-employees/save-employees.component';


const routes: Routes = [
  { path: 'department/save', component: SaveDepartmentComponent },
  { path: 'department', component: DepartmentComponent },

  { path: 'employees/save', component: SaveEmployeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:empID/edit', component: EditEmployeesComponent },
  { path: 'employees/:empID/delete', component: DeleteEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
