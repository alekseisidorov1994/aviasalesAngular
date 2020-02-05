import { Component, OnInit } from '@angular/core';
import {FilterTicketService} from '../../services/filterTicket.service';
import {Filters} from '../../interfaces/interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
filters: Filters = {
  all: true,
  off: false,
  t1: false,
  t2: false,
  t3: false,
};

  constructor(private filterTicketsService: FilterTicketService) { }

  ngOnInit() {
    this.filterTicketsService.getFilterBtn(this.filters)
  }

  sendFilter(filtAll?) {
      if (filtAll && this.filters.all) {
        for (const key of Object.keys(this.filters)){
         if (key !== 'all') {
           this.filters[key] = false;
         }
        }
      } else {
        this.filters.all = false;
      }
      this.filterTicketsService.getFilters(this.filters)
  }
}
