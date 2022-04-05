import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './canvas/students/students.component'
import { TeachersComponent } from './canvas/teachers/teachers.component'
import { AdminsComponent } from './canvas/admins/admins.component'
import { AuthGuard } from "./utils/auth-guard";
import { HomePageComponent } from './canvas/home-page/home-page.component'
import {CanvasResolver} from './canvas/canvas.resolver'
const routes: Routes = [
  {

    path: 'canvas',
    children: [
      {
        path: '',
        component: HomePageComponent,

      },
      {
        path: 'student',
        component: StudentsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['student_role'] },
      },
      {
        path: 'admin',
        component: AdminsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['staff'] }
      },
      {
        path: 'teachers',
        component: TeachersComponent,
        canActivate: [AuthGuard],
        data: { roles: ['staff'] }
      },

    ],
    resolve: {
      types: CanvasResolver,
    }

  },
  { path: '**', redirectTo: '/canvas' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
