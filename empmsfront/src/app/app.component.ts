import {Component, OnInit} from '@angular/core';
import {Employee} from "./Employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: Array<Employee>;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Array<Employee>) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onOpenModal(employee: Employee, mode: string): void {
    let button: HTMLElement;
    if (mode === 'add') {
      button = document.getElementById('addEmployeeHiddenButton');
    } else if (mode === 'edit') {
      button = document.getElementById('editEmployeeHiddenButton');
    } else if (mode === 'delete') {
      button = document.getElementById('deleteEmployeeHiddenButton');
    }
    button.click();
  }
}
