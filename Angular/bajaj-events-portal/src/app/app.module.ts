import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeesModule } from "./employees/employees.module";
import { EventsModule } from './events/events.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    EventsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
