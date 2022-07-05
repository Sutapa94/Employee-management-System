import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() cancelEmp:EventEmitter<boolean>=new EventEmitter();
  @Output() addEmp:EventEmitter<Employee>=new EventEmitter();
  

    name?:string
    birthdate?:string
    gender?:string
    company?:string
    experience?:number
    education?:string
    image?:string

  constructor() {}

  ngOnInit(): void {
  }
  onSelectImage(event:any){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload=(events:any) => {
        this.image=events.target.result;
      }
    }
  }
  addEmployee(add:NgForm){
    const employee=
      {
        name:this.name,
        birthdate:this.birthdate,
        gender:this.gender,
        company:this.company,
        experience:this.experience,
        education:this.education,
        image:this.image
      }
    
    this.addEmp.emit(employee);
    add.reset();
    
  }
  
  cancel(){
    this.cancelEmp.emit();
  }
}
