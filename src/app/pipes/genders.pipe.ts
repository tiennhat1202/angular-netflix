import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genders'
})
export class GendersPipe implements PipeTransform {

  transform(gender: string): any {
    if (gender = "1") {
      return 'Female'
    }
    else if (gender = "2") {
      return 'Male';
    }
  }
}
