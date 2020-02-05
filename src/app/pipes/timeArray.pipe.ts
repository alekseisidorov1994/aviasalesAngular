import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'arrayTime'
})

export class TimeArrayPipe implements PipeTransform{
  transform(timeAt: any, duration: any): any {
    const time = new Date ((new Date(timeAt).getTime() + duration * 60000));
    return (new Date(timeAt).getHours() + ':' + new Date(timeAt).getMinutes() + ' - '  + new Date(time).getHours()  + ':' + new Date(time).getMinutes());

  }

}
