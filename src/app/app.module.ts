import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketDashboardComponent } from './components/ticket-dashboard/ticket-dashboard.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoginComponentComponent,
    LoginComponent,
    TicketDashboardComponent,
    TicketFormComponent,
    TicketDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
