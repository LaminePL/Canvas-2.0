import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersBoardComponent } from './canvas/teachers/teachers-board/teachers-board.component'
import { AdminsBoardComponent } from './canvas/admins/admins-board/admins-board.component'
import { AuthGuard } from "./utils/auth-guard";
import { HomePageComponent } from './canvas/home-page/home-page.component'
import {CanvasResolver} from './canvas/canvas.resolver'
import {StudentNavComponent} from './canvas/student/student-nav/student-nav.component'
import {AdminsNavComponent} from './canvas/admins/admins-nav/admins-nav.component'
import {TeachersNavComponent} from "./canvas/teachers/teachers-nav/teachers-nav.component";

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
        component: StudentNavComponent,
        canActivate: [AuthGuard],
        data: { roles: ['student_role'] },
      },
      {
        path: 'admin',
        component: AdminsNavComponent,
        canActivate: [AuthGuard],
        data: { roles: ['admins_role'] }
      },
      {
        path: 'teacher',
        component: TeachersNavComponent,
        canActivate: [AuthGuard],
        data: { roles: ['teachers_role'] }
      },

    ],

  },
 // { path: '**', redirectTo: '/canvas' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
