import { Component } from '@angular/core';
import employee from '../../../shared/employee.json';
import { Employee } from 'src/shared/employee';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss'],
  providers: [MessageService]
})
export class EmployeeHomeComponent {
  emp = employee;

  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onRowSelect(event: any) {
    this.router.navigateByUrl('employee-detail/' + event.data.username, {
      state: event.data
    })
    // this.router.navigate()
    // console.log('open detail', event.data.username)
  }

  addEmployee() {
    this.router.navigateByUrl('/employee-add');
  }

  editEmployee(username: any) {
    this.messageService.add({ severity: 'warn', summary: 'Edit', detail: `Editing ${username}` });
  }

  deleteEmployee(username: any) {
    this.messageService.add({ severity: 'error', summary: 'Delete', detail: `Deleting ${username}` });
  }
}
