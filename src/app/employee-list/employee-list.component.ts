import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  private getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(data =>{
      this.employees = data;
    })
  }

  deleteEmployee(id: number){
    if(id){
      this.employeeService.deleteEmployee(id).subscribe(data=>{
        // console.log(data)
        this.getAllEmployees()
      })
    }  
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id])
  }

  getEmployee(id: number){
    this.router.navigate(['employee', id])
  }

}
