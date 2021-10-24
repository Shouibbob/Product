import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCurrancy'
})
export class PriceCurrancyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `Price : ${value} EGP`;
  }

}
