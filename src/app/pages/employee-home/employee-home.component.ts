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
  emp: any;
  group: any;
  status: any;
  groupList = [
    { name: "Sales", code: "Sales"},
    { name: "Marketing", code: "Marketing"},
    { name: "Finance", code: "Finance"},
    { name: "Human Resources", code: "Human Resources"},
    { name: "IT", code: "IT"},
    { name: "Operations", code: "Operations"},
    { name: "Customer Service", code: "Customer Service"},
    { name: "Research and Development", code: "Research and Development"},
    { name: "Legal", code: "Legal"},
    { name: "Administration", code: "Administration"},
  ];

  statusList = [
    { name: "ACTIVE", code: "ACTIVE"},
    { name: "INACTIVE", code: "INACTIVE"}
  ]
  

  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("login") === "false") {
      this.router.navigateByUrl('/login');
    } else {
      this.emp = JSON.parse(localStorage.getItem("employee")!);
    }
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
