import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveDepartmentComponent } from './department/pages/save-department/save-department.component';


const routes: Routes = [
  { path: 'department/save', component: SaveDepartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
