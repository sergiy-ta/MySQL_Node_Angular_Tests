import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/pages/department/department.component';
import { SaveDepartmentComponent } from './department/pages/save-department/save-department.component';


const routes: Routes = [
  { path: 'department/save', component: SaveDepartmentComponent },
  { path: 'department', component: DepartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
