import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toggle:boolean=false;
  enableEdit:boolean=false;
  employee:Employee[];
  editEmployee:Employee;
  index;
  searchText:string="";

  constructor() {
    const localItem = localStorage.getItem("Employee");
    if(localItem===null){
      this.employee=[];
    }
    else{
      this.employee= JSON.parse(localItem);
    }    
   }

  ngOnInit(): void {
  }
  employeeDelete(event:Employee){
    console.log(event);
    const index= this.employee.indexOf(event);
    this.employee.splice(index,1);
    localStorage.setItem("Employee",JSON.stringify(this.employee));
  }

  add(){
    this.toggle=true;
  }
  cancelEmployee(){
    this.toggle=false;
  }
  editCancel(){
    this.enableEdit=false;
  }
  addEmployee(emp:Employee){
    console.log(emp);
    this.employee.push(emp);
    localStorage.setItem("Employee",JSON.stringify(this.employee));
  }
  employeeEdit(emp:Employee){
    console.log(emp);
    this.enableEdit=true;
    this.editEmployee=emp;
    this.index=this.employee.indexOf(emp)
  }
  empEdited(emp:Employee){
    this.employee[this.index]=emp;
    localStorage.setItem("Employee",JSON.stringify(this.employee));
    this.enableEdit=false;
  }
  
}
