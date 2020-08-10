import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe'
})
export class TruncatePipePipe implements PipeTransform {

  transform(value: string, limit: number) {
    return value.length < limit
    ? value
    : value.slice(0, limit) + '...';
  }

}
