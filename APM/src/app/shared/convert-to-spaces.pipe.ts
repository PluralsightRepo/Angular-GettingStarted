import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "converToSpaces",
})

export class ConverToSpacePipe implements PipeTransform {
  transform(value: string, character: string) {
    return value.replace(character, ' ');
  }
}
