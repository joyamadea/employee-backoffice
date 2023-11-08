import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import dayjs from 'dayjs';

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
      basicSalary: [0, [Validators.required, Validators.min(1)]],
      status: [null, [Validators.required]],
      group: [null, [Validators.required]],
      description: [new Date(), [Validators.required]]
    })
  }

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      let tempForm = this.employeeForm.value;
      tempForm.group = tempForm.group.code;
      tempForm.status = tempForm.status.name;
  
      if (this.employeeForm.value.birthDate) {
        tempForm.birthDate = dayjs(this.employeeForm.value.birthDate).format('YYYY-MM-DD');
      }
  
      if (this.employeeForm.value.description) {
        tempForm.description = dayjs(this.employeeForm.value.birthDate).format('YYYY-MM-DD hh:mm:ss');
      }
  
      console.log('submitted form', tempForm);
      // this.messageService.add({ severity: 'success', summary: 'Added', detail: `Succesfully Added` });
      this.router.navigateByUrl('/employee');
    } else {
      this.employeeForm.markAllAsTouched();
    }
    
  }

  onCancel() {
    this.router.navigateByUrl('/employee');
  }
}
