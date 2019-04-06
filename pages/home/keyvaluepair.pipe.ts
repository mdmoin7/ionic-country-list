import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyvaluepair'
})
export class KeyValuePairPipe implements PipeTransform {
 transform(value:any) : any[] {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}