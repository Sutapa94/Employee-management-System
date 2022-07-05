import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() emp?:Employee;
  @Output() employeeDetails:EventEmitter<Employee>=new EventEmitter();
  @Output() employeeEdit:EventEmitter<Employee>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(employee:Employee){
    this.employeeDetails.emit(employee);
  }
  onEdit(employee:Employee){
    this.employeeEdit.emit(employee);
  }

}
