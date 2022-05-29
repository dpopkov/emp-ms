import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./Employee";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly apiServerUrl = environment.apiBaseUrl + '/employee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(this.apiServerUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/${id}`);
  }

  addEmployee(data: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiServerUrl, data);
  }

  updateEmployee(data: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiServerUrl, data);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`);
  }
}
