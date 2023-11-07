import { Component } from '@angular/core';
import employee from '../../../shared/employee.json';
import { Employee } from 'src/shared/employee';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss'],
  providers: [MessageService]
})
export class EmployeeHomeComponent {
  emp = employee;

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit() {
    console.log('employee', employee[0].username);
  }

  onRowSelect(event: any) {
    console.log('open detail', event.data.username)
  }

  addEmployee() {
    
  }

  editEmployee(username: any) {
    this.messageService.add({ severity: 'warn', summary: 'Edit', detail: `Editing ${username}` });
  }

  deleteEmployee(username: any) {
    this.messageService.add({ severity: 'error', summary: 'Delete', detail: `Deleting ${username}` });
  }
}
