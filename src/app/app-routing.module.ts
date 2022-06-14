import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./utils/auth-guard";
import { CanvasComponent } from './canvas/canvas.component'
import { UnauthorizedComponent } from './canvas/shared/unauthorized/unauthorized.component';
import { NotFoundComponent } from './canvas/shared/not-found/not-found.component';
import { RouteGuard } from './utils/route-guard';
const routes: Routes = [
  {

    path: 'canvas',
    children: [
      {
        path: '',
        component: CanvasComponent,
        canActivate: [AuthGuard]

      },
      {
        path: 'student',
        loadChildren: () => import('./canvas/student/student.module').then(mod => mod.StudentModule),
        canActivate: [RouteGuard],
        data: { roles: ['student_role'] },
      },

      {
        path: 'admin',
        loadChildren: () => import('./canvas/admins/admins.module').then(mod => mod.AdminsModule),
        canActivate: [RouteGuard],
        data: { roles: ['admins_role'] }
      },
      {
        path: 'teacher',
        loadChildren: () => import('./canvas/teachers/teachers.module').then(mod => mod.TeachersModule),
        canActivate: [RouteGuard],
        data: { roles: ['teachers_role'] }
      },
      {
        path: 'academy',
        loadChildren: () => import('./canvas/academy/academy.module').then(mod => mod.AcademyModule),
        canActivate: [RouteGuard],
        data: { roles: ['academy_role'] }
      },
      {
        path: 'pedagogy',
        loadChildren: () => import('./canvas/pedagogy/pedagogy.module').then(mod => mod.PedagogyModule),
        canActivate: [RouteGuard],
        data: { roles: ['pedagogy-role'] }
      },
      { path: '401', component: UnauthorizedComponent },

    ],

  },
  { path: '', redirectTo: '/canvas', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  providers: [AuthGuard,RouteGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
