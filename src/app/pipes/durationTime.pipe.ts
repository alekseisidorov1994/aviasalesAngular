import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'durationTime'
})

export class DurationTimePipe implements PipeTransform{
  transform(time: number): any {
    if (time > 60 ) {
      return Math.floor(time / 60) + 'ч ' + time % 60 + 'м';
    } else {
      return '0ч' + time + 'м';
    }

  }

}
