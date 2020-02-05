import {Injectable} from '@angular/core';
import {FetchService} from './fetch.service';
import {Filters, Id, Ticket} from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})

export class FilterTicketService {
  tickets: Ticket[]
  filtredTickets: Ticket[]
  constructor(private fetchService: FetchService) {
  }
  getFilterBtn(filter){
    if (filter && this.filtredTickets) {
      this.filtredTickets = this.filtredTickets.sort(this.filterCheap);
    } else if (!filter && this.filtredTickets) {
      this.filtredTickets = this.filtredTickets.sort(this.filterFast);
    }
    console.log(this.filtredTickets)
  }
  getFilters(filter: Filters){
    if (filter.all) {
      this.filtredTickets = this.tickets;
      return
    }
    const handlers = [];
    handlers.push(this.filterOffStop, this.filter1Stop, this.filter2Stop, this.filter3Stop)
    this.filtredTickets = []
    for ( const handler of handlers) {
      if (handler(filter, this.tickets).length) {
        this.filtredTickets = this.filtredTickets.concat(handler(filter, this.tickets));
      }
    }


  }
  getTickets(): void{
    this.fetchService.searchId().subscribe((id: Id) => {
      this.fetchService.getTickets(id).subscribe((tickets) => {
        this.tickets = tickets.tickets;
        this.filtredTickets = this.tickets.sort(this.filterCheap);
      });
    })
  }
  filterCheap(a, b) {
    if (+a.price > +b.price){
     return 1;
   } else if ( +a.price === +b.price) {
     return 0;
   } else {
     return -1;
   }

  }
  filterFast(a, b){
    const durationTo = +a.segments[0].duration + a.segments[1].duration
    const durationFrom = +b.segments[0].duration + b.segments[1].duration
    if (durationTo > durationFrom){
      return 1;
    } else if ( durationTo === durationFrom) {
      return 0;
    } else {
      return -1;
    }

  }
  filterOffStop(filter: Filters, tickets: Ticket[]){
    if (filter.off) {
      return  tickets.filter( (ticket: Ticket) => {
        if ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === 0) {
          return ticket;
        }
      });
    }
    return [];
  }
  filter1Stop(filter: Filters, tickets: Ticket[]) {
    if (filter.t1) {
      return tickets.filter( (ticket: Ticket) => {
        if ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === 1) {
          return ticket;
        }
      });
    }
    return [];
  }
  filter2Stop(filter: Filters, tickets: Ticket[]) {
    if (filter.t2) {
      return tickets.filter( (ticket: Ticket) => {
        if ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === 2) {
          return ticket;
        }
      });
    }
    return [];
  }
  filter3Stop(filter: Filters, tickets: Ticket[] ){
    if (filter.t3) {
      return tickets.filter( (ticket: Ticket) => {
        if ((ticket.segments[0].stops.length + ticket.segments[1].stops.length) === 3) {
          return ticket;
        }
      });
    }
    return [];
  }
}
