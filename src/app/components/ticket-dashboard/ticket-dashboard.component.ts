import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-dashboard',
  templateUrl: './ticket-dashboard.component.html',
  styleUrls: ['./ticket-dashboard.component.css']
})
export class TicketDashboardComponent implements OnInit {
  tickets: any[] = []; 

  constructor(private router: Router) { }

  
  

  ngOnInit() {
    this.tickets = this.getMockTickets(); // Fetch mock tickets
  }

  getMockTickets() {
    return [
      { id: 1, title: 'Issue with login', priority: 'High', type: 'Bug', status: 'Open', date: new Date() },
      // ... more mock tickets
    ];
  }

  viewTicketDetails(ticketId: number) {
    this.router.navigate(['/ticket', ticketId]);
    }
}
