import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zadanie2'
})
export class Zadanie2Pipe implements PipeTransform {

  transform(value: number): number {
    return value + 5;
  }

}
