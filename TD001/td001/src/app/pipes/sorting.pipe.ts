import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: "sortBy"})
export class SortingPipe implements PipeTransform {

  transform(array: any[], args: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
