import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { IconHeaderComponent } from './pages/icon-header/icon-header.component';
import { PopupDialogContactFormComponent } from './pages/icon-header/popup-dialog-contact-form/popup-dialog-contact-form.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    IconHeaderComponent,
    FrontPageComponent,
    ExamplePageComponent,
    HeaderComponent,
    PopupDialogContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
