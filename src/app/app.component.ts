import { Component } from '@angular/core';
import employee from '../shared/employee.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-backoffice';
  
  ngOnInit() {
    localStorage.setItem("login", "false");
    localStorage.setItem("employee", JSON.stringify(employee))
  }
}
