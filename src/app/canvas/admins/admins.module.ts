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
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import AdminProfileComponent from './admin-profile/admin-profile.component';
const ROUTES: Routes = [
  {
    path: '',
    component:AdminsBoardComponent ,
  },
  {
    path: 'user-profile',
    component:AdminProfileComponent
  },
]

@NgModule({
  declarations: [AdminsBoardComponent,AdminProfileComponent],
  imports: [RouterModule.forChild(ROUTES),SharedModule,MaterialModule,CommonModule,FormsModule,MatDialogModule]
})
export class AdminsModule {
}
