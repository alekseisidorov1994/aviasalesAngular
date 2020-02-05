import {Component, OnInit} from '@angular/core';
import {FilterTicketService} from '../../services/filterTicket.service';

@Component({
  selector: 'app-wall-page',
  templateUrl: './wall-page.component.html',
  styleUrls: ['./wall-page.component.sass']
})
export class WallPageComponent implements OnInit {

  constructor(private filterTicketsService: FilterTicketService ) { }

  ngOnInit() {
    this.filterTicketsService.getTickets();
  }
}
