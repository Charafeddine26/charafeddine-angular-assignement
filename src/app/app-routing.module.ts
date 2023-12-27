import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TicketDashboardComponent } from './components/ticket-dashboard/ticket-dashboard.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: TicketDashboardComponent },
  { path: 'new-ticket', component: TicketFormComponent },
  { path: 'ticket/:id', component: TicketDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Redirect to dashboard as the default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
