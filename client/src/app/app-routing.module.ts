import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/pages/department/department.component';
import { SaveDepartmentComponent } from './department/pages/save-department/save-department.component';
import { SaveEmployeesComponent } from './employees/pages/save-employees/save-employees.component';


const routes: Routes = [
  { path: 'department/save', component: SaveDepartmentComponent },
  { path: 'department', component: DepartmentComponent },

  { path: 'employees/save', component: SaveEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
