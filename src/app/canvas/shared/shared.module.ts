import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DTableComponent } from './d-table/d-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideNavComponent } from './side-nav/side-nav.component';


const COMPONENTS = [DTableComponent,PageNotFoundComponent,SideNavComponent]

@NgModule({
    imports: [MatTableModule,CommonModule],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS],
    providers: [],
})
export class SharedModule { }
