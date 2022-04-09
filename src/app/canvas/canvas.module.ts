import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsComponent} from './admins/admins.component'
import {TeachersComponent} from './teachers/teachers.component'
import {CanvasResolver} from './canvas.resolver'
import {MaterialModule} from '../material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './student-board/nav/nav.component';
import { AdminsNavComponent } from './admins/admins_nav/admins_nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { StudentBoardComponent } from './student-board/student-board.component'
@NgModule({
  declarations: [AdminsComponent,TeachersComponent, NavComponent, StudentBoardComponent,AdminsNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    CanvasResolver
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CanvasModule { }
