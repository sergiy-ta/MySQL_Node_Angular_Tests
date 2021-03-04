import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteDepartmentComponent } from './department/pages/delete-department/delete-department.component';
import { DepartmentComponent } from './department/pages/department/department.component';
import { EditDepartmentComponent } from './department/pages/edit-department/edit-department.component';
import { MoreDepartmentComponent } from './department/pages/more-department/more-department.component';
import { SaveDepartmentComponent } from './department/pages/save-department/save-department.component';
import { DeleteEmployeesComponent } from './employees/pages/delete-employees/delete-employees.component';
import { EditEmployeesComponent } from './employees/pages/edit-employees/edit-employees.component';
import { EmployeesComponent } from './employees/pages/employees/employees.component';
import { MoreEmployeesComponent } from './employees/pages/more-employees/more-employees.component';
import { SaveEmployeesComponent } from './employees/pages/save-employees/save-employees.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },

  { path: 'department/save', component: SaveDepartmentComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'department/:dpID/more', component: MoreDepartmentComponent },
  { path: 'department/:dpID/edit', component: EditDepartmentComponent },
  { path: 'department/:dpID/delete', component: DeleteDepartmentComponent },

  { path: 'employees/save', component: SaveEmployeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:empID/more', component: MoreEmployeesComponent },
  { path: 'employees/:empID/edit', component: EditEmployeesComponent },
  { path: 'employees/:empID/delete', component: DeleteEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
