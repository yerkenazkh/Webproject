import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {

  constructor(private tickService: TicketService) { }

  public tickets = []

  ngOnInit(): void {
    this.tickService.get().subscribe(data => {
      this.tickets = data
    })
  }

  onDelete(id) {
    this.tickService.delete(id)
  }
}
