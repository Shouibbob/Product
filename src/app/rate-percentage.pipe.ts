import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratePercentage'
})
export class RatePercentagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    return `rate : ${value} %`;
  }

}
