import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  public ticketInfo = {
    from: '',
    to: '',
    cost: 0
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.ticketService.set(this.ticketInfo)
  }
}
