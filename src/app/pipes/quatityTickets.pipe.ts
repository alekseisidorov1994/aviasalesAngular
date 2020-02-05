import {Pipe, PipeTransform} from '@angular/core';
import {Ticket} from '../interfaces/interface';


@Pipe({
  name: 'quantity',
  pure: false
})

export class QuatityTicketsPipe implements PipeTransform{
  transform(array: Ticket[], quantity: number): Ticket[] {
    return (array.splice(0, quantity));
  }

}
