import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./utils/auth-guard";
import { CanvasComponent } from './canvas/canvas.component'
import { UnauthorizedComponent } from './canvas/shared/unauthorized/unauthorized.component';
import { NotFoundComponent } from './canvas/shared/not-found/not-found.component';
const routes: Routes = [
  {

    path: 'canvas',
    children: [
      {
        path: '',
        component: CanvasComponent,
        canActivate: [AuthGuard],

      },
      {
        path: 'student',
        loadChildren: () => import('./canvas/student/student.module').then(mod => mod.StudentModule),
        canActivate: [AuthGuard],
        data: { roles: ['student_role'] },
      },

      {
        path: 'admin',
        loadChildren: () => import('./canvas/admins/admins.module').then(mod => mod.AdminsModule),
        canActivate: [AuthGuard],
        data: { roles: ['admins_role'] }
      },
      {
        path: 'teacher',
        loadChildren: () => import('./canvas/teachers/teachers.module').then(mod => mod.TeachersModule),
        canActivate: [AuthGuard],
        data: { roles: ['teachers_role'] }
      },
      { path: '401', component: UnauthorizedComponent },

    ],

  },
  { path: '', redirectTo: '/canvas', pathMatch: 'full' },
  { path: 'canvas/404', component: NotFoundComponent },
  { path: '**', redirectTo: 'canvas/404' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
