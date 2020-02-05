import { Component, OnInit } from '@angular/core';
import {FilterTicketService} from '../../services/filterTicket.service';

@Component({
  selector: 'app-mostbuttons',
  templateUrl: './mostbuttons.component.html',
  styleUrls: ['./mostbuttons.component.sass']
})
export class MostbuttonsComponent implements OnInit {
  filterBtnCheapFast = true;

  constructor(private filterTicketsService: FilterTicketService) { }

  ngOnInit() {
    this.filterTicketsService.getFilterBtn(this.filterBtnCheapFast)
  }

  changeFilter(filter: boolean) {
    if (this.filterBtnCheapFast === filter){
      return;
    }
    filter ? this.filterBtnCheapFast = true : this.filterBtnCheapFast = false;
    this.filterTicketsService.getFilterBtn(this.filterBtnCheapFast)
  }
}
