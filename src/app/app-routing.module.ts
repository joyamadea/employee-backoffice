import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeHomeComponent } from './pages/employee-home/employee-home.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'employee', component: EmployeeHomeComponent},
  { path: 'employee-add', component: EmployeeAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
