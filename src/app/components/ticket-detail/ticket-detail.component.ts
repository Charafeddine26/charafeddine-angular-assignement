import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket: any; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const ticketId = this.route.snapshot.paramMap.get('id');
    // Use ticketId to retrieve ticket details
  }

  getMockTicket() {
    return {
      id: 1,
      title: 'Example Ticket',
      description: 'Details about the ticket...',
      priority: 'High',
      type: 'Bug',
      status: 'Open',
      date: new Date()
    };
  }

  goBack() {
    // Logic to go back to the dashboard
    console.log('Back to dashboard');
  }
}
