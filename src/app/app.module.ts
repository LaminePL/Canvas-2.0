import { APP_INITIALIZER, LOCALE_ID, NgModule, } from '@angular/core';
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
import {SideNavComponent} from './canvas/shared/side-nav/side-nav.component'
import {NavbarComponent} from './canvas/shared/navbar/navbar.component'
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavbarComponent
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
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    { provide: LOCALE_ID, useValue: 'fr-FR'},

  ],
  schemas: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


