import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { DTableComponent } from './d-table/d-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const COMPONENTS = [DTableComponent,NotFoundComponent,SideNavComponent,UserProfileComponent,UnauthorizedComponent,NavbarComponent]

@NgModule({
    imports: [MatTableModule,CommonModule,MaterialModule],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS],
    providers: [],
})
export class SharedModule { }
