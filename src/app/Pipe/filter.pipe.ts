import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterText: string, name:string): any {
    if(value.length===0 || filterText===''){
      return value;
    }
    else{
      const result = []
      for( const item of value){
        if(item[name].includes(filterText)){
          result.push(item)
        }
      }
      return result;
    }
  }

}
