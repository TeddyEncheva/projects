import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaList',
})
export class CommaListPipe implements PipeTransform {
  transform(list: Array<any>): string {
    let transformedList: string = '';
    if (list.length > 0) {
      list.forEach((element) => {
        transformedList += `${element}, `;
      });
      transformedList = transformedList.replace(/\//g, ', ');
      transformedList = transformedList.replace(/,\s*$/, '');
      return transformedList;
    }
  }
}
