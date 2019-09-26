
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { Component1 } from './components/component-1/component-1.component';
import { PrintDirective } from './directives/print.directive';
import { ComponentNotification } from './components/component-notif/component-notif.component';
import { NotificationService } from './services/notification.service';
import { ArrayToStringPipe } from './pipes/arraytostring.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    PrintDirective,
    ComponentNotification,
    ArrayToStringPipe
  ],
  imports: [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
