import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  ticketForm: FormGroup;
  

  constructor() {
    this.ticketForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('Low'),
      type: new FormControl('Bug')
    });
  }

  ngOnInit() {
    this.ticketForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('Low'),
      type: new FormControl('Bug')
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      console.log('Form Submission', this.ticketForm.value);
      // Here you can add logic to add the ticket to a list or send it to a backend
    }
  }
}
