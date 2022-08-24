import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee: Employee = new Employee()
  constructor(private employeeService: EmployeeService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee)
    this.addEmployee()
    this.redirect()
  }

  addEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(data =>{
      console.log(data)
    },
    error=>console.log(error));
  }

  redirect(){
    this.route.navigate(['/home'])
  }
}
