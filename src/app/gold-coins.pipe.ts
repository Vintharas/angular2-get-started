import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goldCoins'
})
export class GoldCoinsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value} gold coins`;
  }

}
