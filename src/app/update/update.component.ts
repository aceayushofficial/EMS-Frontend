import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!:number
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.id=this.route.snapshot.params['id']
    this.updateEmployee(this.id);
    this.redirect();
  }

  updateEmployee(id: number){
    this.employeeService.updateEmployee(id, this.employee).subscribe(data=>{
      console.log(data)
      this.redirect()
    })
  }

  redirect(){
    this.router.navigate(['/home'])
  }
}


