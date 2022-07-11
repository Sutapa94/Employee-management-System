import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

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
  aboutPageVisible:boolean=false;

  constructor( private serivce : EmployeeService) {}

  ngOnInit(): void {
    //With Local Storage :
    // const localItem = localStorage.getItem("Employee");
    // if(localItem===null){
    //   this.employee=[];
    // }
    // else{
    //   this.employee= JSON.parse(localItem);
    // }    

    //With Http request:
    this.serivce.fetchEmployeeService()
    .subscribe(
      posts => {
        this.employee = posts;
      }
    );
  }
  employeeDelete(event:Employee){
    console.log(event);
    const index= this.employee.indexOf(event);
    this.employee.splice(index,1);
    //with local storage:
    //localStorage.setItem("Employee",JSON.stringify(this.employee));

    //with http requests:
    this.serivce.editEmployeeService(this.employee).subscribe();
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
    //with Local Storage
    //localStorage.setItem("Employee",JSON.stringify(this.employee));

    //With Http request:
    this.serivce.addEmployeeService(emp).subscribe();
  }
  employeeEdit(emp:Employee){
    console.log(emp);
    this.enableEdit=true;
    this.editEmployee=emp;
    this.index=this.employee.indexOf(emp)
  }
  empEdited(emp:Employee){
    this.employee[this.index]=emp;
    //localStorage.setItem("Employee",JSON.stringify(this.employee));
    this.serivce.editEmployeeService(this.employee).subscribe();
    this.enableEdit=false;
  }
  onAboutClick(){
    this.aboutPageVisible=true;
  }
  onHomeClick(){
    this.aboutPageVisible=false;
  }
  
}
