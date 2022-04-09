import { APP_INITIALIZER, NgModule,   } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeKeycloak } from "./utils/app.init";
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasModule } from './canvas/canvas.module';
import { NgChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';
import {MaterialModule} from './material.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
    AppRoutingModule,
    CanvasModule,
    NgChartsModule,
    LayoutModule,
    MaterialModule,
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
