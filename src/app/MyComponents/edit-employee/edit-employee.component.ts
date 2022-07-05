import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() editEmp :Employee
  @Output() cancelEdit:EventEmitter<boolean>=new EventEmitter();
  @Output() editedEmp : EventEmitter<Employee>=new EventEmitter();

    name?:string
    birthdate?:string
    gender?:string
    company?:string
    experience?:number
    education?:string
    image?:string

  constructor() { }

  ngOnInit(): void {
    this.name=this.editEmp.name;
    this.birthdate=this.editEmp.birthdate;
    this.gender=this.editEmp.gender;
    this.company=this.editEmp.company;
    this.education=this.editEmp.education;
    this.experience=this.editEmp.experience;
    this.image=this.editEmp.image;
  }

  editEmployee(){
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
    this.editedEmp.emit(employee);
    
  }

  cancel(){
    this.cancelEdit.emit();
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

}
