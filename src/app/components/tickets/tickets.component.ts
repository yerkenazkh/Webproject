import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private tickService: TicketService) { }

  public tickets = []
  public cities = []
  
  public selectedFrom: String = ''
  public selectedTo: String = ''

  ngOnInit(): void {
    this.tickService.get().subscribe(data => {
      this.tickets = data
    })

    this.tickService.getCities().subscribe(data => {
      this.cities = data
      console.log(data)
    })
  }

  onSearch(): void {
    this.tickService.get().subscribe(data => {
      this.tickets = data.filter(ticket => {
        return ticket.from == this.selectedFrom && ticket.to == this.selectedTo
      })
    })
  }

}
