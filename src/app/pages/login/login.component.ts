import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  dummyLogin = {
    username: 'admin',
    password: 'admin123'
  }
  fail = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.initForms();
  }

  initForms() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitLogin() {
    if (this.loginForm.value.username == this.dummyLogin.username && this.loginForm.value.password == this.dummyLogin.password) {
      this.fail = false ;
    } else {
      this.fail = true;
    }
  }
}
