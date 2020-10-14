import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter',
})
export class TimeConverterPipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 60);
    const minutes: number = value % 60;
    return `${hours}h ${minutes}m`;
  }
}
