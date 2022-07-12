import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = "https://curd-6bc9d-default-rtdb.firebaseio.com/posts.json"

  constructor(private http : HttpClient) { }

  addEmployeeService(emp : Employee){
     return this.http.post(this.url,emp)
  }

  editEmployeeService(emp : Employee[]){
    return this.http.put(this.url,emp)
  }

  fetchEmployeeService(){
    return this.http.get(this.url)
    .pipe(map(postData => {
      const result = [];
      for (const key in postData){
        if(postData.hasOwnProperty(key)){
          result.push({...postData[key] , id:key})
        }
      }
      return result;
    }))
  }

}
