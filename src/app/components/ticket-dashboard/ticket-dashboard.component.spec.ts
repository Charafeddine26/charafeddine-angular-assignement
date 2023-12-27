import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDashboardComponent } from './ticket-dashboard.component';

describe('TicketDashboardComponent', () => {
  let component: TicketDashboardComponent;
  let fixture: ComponentFixture<TicketDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDashboardComponent]
    });
    fixture = TestBed.createComponent(TicketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
