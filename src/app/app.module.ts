import { APP_INITIALIZER, NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeKeycloak } from "./utils/app.init";
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasModule } from './canvas/canvas.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { NgChartsModule } from 'ng2-charts';
import {StudentNavComponent} from './canvas/student/student-nav/student-nav.component'
import { SharedModule } from './canvas/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    StudentNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
    AppRoutingModule,
    CanvasModule,
    LayoutModule,
    MaterialModule,
    NgChartsModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  schemas: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
