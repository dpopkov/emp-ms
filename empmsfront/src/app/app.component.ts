import {Component, OnInit} from '@angular/core';
import {Employee} from "./Employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: Array<Employee>;
  editEmployee: Employee;
  deleteEmployee: Employee;

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
      this.editEmployee = employee;
      button = document.getElementById('editEmployeeHiddenButton');
    } else if (mode === 'delete') {
      this.deleteEmployee = employee;
      button = document.getElementById('deleteEmployeeHiddenButton');
    }
    button.click();
  }

  onAddEmployee(addForm: NgForm): void {
    AppComponent.closeAddEmployeeForm();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log('onAddEmployee response:', response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }

  private static closeAddEmployeeForm() {
    document.getElementById('add-employee-form').click();
  }

  onUpdateEmployee(employee: Employee): void {
    AppComponent.closeEditEmployeeForm();
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log('onUpdateEmployee response:', response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  private static closeEditEmployeeForm() {
    document.getElementById('edit-employee-form').click();
  }

  onDeleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      (response: void) => {
        console.log('employee deleted by id', id);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
