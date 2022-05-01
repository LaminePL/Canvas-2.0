import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../material.module";
import {ChartModule} from "angular2-chartjs";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {NgChartsModule} from "ng2-charts";
import {AdminsBoardComponent} from './admins-board/admins-board.component'
import { RouterModule, Routes } from '@angular/router';
const ROUTES: Routes = [
  {
    path: '',
    component:AdminsBoardComponent ,
  },
]

@NgModule({
  declarations: [AdminsBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ChartModule,
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
    MatListModule,
    NgChartsModule,

  ]
})
export class AdminsModule {
}
