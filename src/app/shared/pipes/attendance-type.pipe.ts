import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attendanceType'
})
export class AttendanceTypePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().indexOf('video') > -1 ? 'views' : 'visits';
  }

}
