import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: TeacherListComponent
  },
  { path: 'detail/:id', component: TeacherDetailComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
