import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  empDetail: any;

  constructor(
    private router: Router
  ) {
    this.empDetail = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/employee');;
  }
}
