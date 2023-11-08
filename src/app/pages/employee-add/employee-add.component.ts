import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
  providers: [MessageService]
})
export class EmployeeAddComponent {
  employeeForm!: FormGroup;
  maxDate = new Date();
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
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
    ) {}

  ngOnInit() {
    this.initForms();
  }

  initForms() {
    this.employeeForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      birthDate: [new Date(), [Validators.required]],
      basicSalary: [0, [Validators.required]],
      status: ['', [Validators.required]],
      group: ['', [Validators.required]],
      description: [new Date(), [Validators.required]]
    })
  }

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit() {

    console.log('sdf', this.employeeForm.value);
    // this.messageService.add({ severity: 'success', summary: 'Added', detail: `Succesfully Added` });
    this.router.navigateByUrl('/employee');
  }

  onCancel() {
    this.router.navigateByUrl('/employee');
  }
}
