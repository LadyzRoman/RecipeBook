import { Pipe, PipeTransform } from '@angular/core';
import {Unit} from '../model/ingredient';

@Pipe({
  name: 'prettyUnit'
})
export class PrettyUnitPipe implements PipeTransform {

  transform(value: number, unit: Unit = Unit.PIECE): string {
    switch (unit) {
      case Unit.PIECE:
        return `${value} шт.`;
      case Unit.GRAM:
        return `${value} гр.`;
      case Unit.SPOON:
        return `${value} ст.л.`;
    }
  }

}
