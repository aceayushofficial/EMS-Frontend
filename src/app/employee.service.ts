import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/employee/"
  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  addEmployee(employee:Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+"add",employee);
  }

  deleteEmployee(id:number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}`+"delete/"+`${id}`);
  }

  updateEmployee(id:number, employee:Employee):Observable<object>{
    return this.httpClient.put(`${this.baseUrl}`+"update/"+`${id}`,employee);
  }

  getEmployee(id:number):Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}${id}`);
  }
}
